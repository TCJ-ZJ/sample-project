/*eslint-disable*/
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor: [
            'vue/dist/vue.esm.js',
            'vuex/dist/vuex.esm.js',
            'vue-router',
            'axios/dist/axios.min.js'
        ],
    },
    output: {
        path: path.join(__dirname, '../static/js/'),
        filename: '[name].dll.js',
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]',
            context: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
