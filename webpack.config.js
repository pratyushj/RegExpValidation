"use strict";

let webpack = require('webpack');

let config = {

    entry: './src/',

    output: {
        filename: 'index.js',
        path: './dist/',
        publicPath: './',
        sourcePrefix: '  '
    },


    resolve: {
        extensions: ['', '.webpack.js', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = config;
