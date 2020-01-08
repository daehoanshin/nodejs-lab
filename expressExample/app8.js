var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/process/login').post(function (req, res) {
    console.log('/process/login 라이팅 함수에서 받음');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
    res.write("<h1>서버에서 로그인 응답</h1>")
    res.write("<div><p>" + paramId + "</p></div>")
    res.write("<div><p>" + paramPassword + "</p></div>")
    res.end();
});

app.all('*', function (req, res) {
   res.status(404).send('<h1>요청하신 페이지는 없어요.</h1>');
});
app.use('/', router);


http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스로 웹서버 실행됨');
})