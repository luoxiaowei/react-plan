var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, './out'),
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                include: path.join(__dirname,'src'),
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 9000,
        open: true,
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新a
    },
};