var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var qs = require('querystring');
var sanitizeHtml = require('sanitize-html');
var template = require('./lib/template.js');


app.get('/', (request, response) => {
  fs.readdir('./data', (error, filelist) => {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list, 
      `<h2>${title}</h2>${description},
      <a href="/create">create</a>`
    );
    response.send(html);
  });
});

app.get('/page/:pageId', (request, response) => {
  fs.readdir(`./data`, (error, filelist) => {
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ['h1']
      });
      var list = template.list(filelist);
      var html = template.HTML(sanitizedTitle, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`
      );
      response.send(html);
    });
  })
});

app.get('/create', (request, response) => {
  fs.readdir('./data', (error, filelist) => {
    var title = 'WEB - create';
    var list = template.list(filelist);
    var html = template.HTML(title, list, `
      <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `, `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
    /* response.writeHead(200);
    response.end(html); */
    response.send(html);
  });
});

app.post('/create_process', (request, response) => {
  var body = "";
  request.on('data', (data) => {
    body = body + data;
  });
  request.on('end', () => {
    var post = qs.parse(body);
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
      //response.writeHead(302, {Location: `/?id=${title}`});
      // response.end();
      response.redirect(`/?=${title}`);
    })
  })
});

app.get('/update/:pageId', function (request, response) {
  fs.readdir('./data', function (error, filelist) {
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
      var title = request.params.pageId;
      var list = template.list(filelist);
      var html = template.HTML(title, list,
        `
        <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
        `,
        `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
      );
      response.send(html);
    });
  });
});

app.post('/update_process', (request, response) => {
  var body = '';
  request.on('data', (data) => {
    body = body + data;
  });

  request.on('end', () => {
    var post = qs.parse(body);
    var id = post.id;
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, (error) => {
      fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end();
      });
    });
  });
});


app.post('/delete_process', (request, response) => {
  var body = "";
  request.on('data', (data) => {
    body = body + data;
  });
  request.on('end', () => {
    var post = qs.parse(body);
    var id = post.id;
    var filteredId = path.parse(id).base;
    fs.unlink(`data/${filteredId}`, (error) => {
      response.writeHead(302, {Location: `/`});
      response.end();
    })
  })
});
/* app.get('/update/:pageId', (request, response) => {
  fs.readdir('./data', (error, filelist) => {
    var filteredId = path.pageId(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', (err, description) => {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags:['h1']
      })
      var list = template.list(filelist);
      var html = template.HTML(sanitizedTitle, list, 
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>

          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit" value="delete">
            </p>
          </form>`,
          `<a href="/create">create</a> <a href="/update/"`
        );
        response.send(html);
    });
  });
}); */

app.listen(3000, () => console.log('Example app listening on port 3000!!'));

/* app.listen(3000, function () {
  console.log('Example app listening   on port 3000!!');
}); */
