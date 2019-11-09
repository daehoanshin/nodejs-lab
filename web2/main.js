var http = require('http');
var fs = require('fs');

console.log('aaa');

var app = http.createServer(function(request, response) {
    var url = request.url;
    if(request.url == '/') {
        url = '/index.html'
    }
    
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);