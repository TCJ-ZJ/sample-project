/**
 * @file routes file
 * @author zhangjie
 */
const express = require('express');
const path = require('path');
/* eslint-disable */
const router = express.Router();
const glob = require('glob');
glob.sync(path.join(__dirname, '../controllers/*.js')).forEach(file => {
    let instance = require(file);
    let filePath = file.split('/');
    let urlPath = filePath[filePath.length-1].replace(/\.[^.]*$/, '');
    let controllers = Object.keys(instance);
    controllers.forEach(controller => {
        let routePath = '/' + urlPath + '/' + controller;
        let handler = instance[controller].handler;
        let method = instance[controller].method;
        router[method.toLowerCase()](routePath, handler);
    })
});
module.exports = router;
