'use strict'
const path = require('path');

module.exports = {
    dev: {
        env: require('./dev.env'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        port: process.env.PORT || 4000,
        proxyTable: {},
        autoOpenBrowser: true,
        cssSourceMap: true
    },
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: false,
        devtool: '#source-map'
    }
};
