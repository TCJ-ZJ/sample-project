/* eslint-disable */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../build/webpack.dev.conf');
const compiler = webpack(config);
const api = require('./routes/api');
const log = console.log;
const port = require('../config');
let app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
    res.sendFile('../index.html');
});
app.use('/api', api);
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = {};
    res.status(err.status || 500);
    res.render('error');
});
app.listen(port.dev.port, function () {
    log(chalk.green('----server listen at 127.0.0.1:' + port.dev.port + '----'));
});
module.exports = app;
