const express = require('express');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path')
// const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const pageRouter = require('./routes/page');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());

app.use('/', pageRouter);

/*
* 위의 미들웨어들에서 아무런 응답도 찾지 못했다면
* 해당 미들웨어에서 404 에러를 만들어서 보낸다.
*/
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 개발 환경일 때만 페이지에 에러 로그 출력
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log('web app is running at port',app.get('port'));
    console.log('404 error will fallback error.pug (/)');
});