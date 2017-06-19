'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./entry.js"
    ],
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: './out/',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel"}
        ]
    }
};