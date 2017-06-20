const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* eslint-disable */

// antd-mobile 1.0 Icon
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, '')
];

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/main')
    ],
    output: {
        path: path.join(__dirname, './build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            styles: path.resolve(__dirname, 'src/styles'),
            images: path.resolve(__dirname, 'src/images'),
            utils: path.resolve(__dirname, 'src/utils')
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg)$/i,
                use: 'svg-sprite-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: 'url-loader?limit=1000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.tpl.html')
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            '_global.proxy': JSON.stringify('/api')
        })
    ],
    devServer: {
        historyApiFallback: true,
        open: true,
        inline: true,
        hot: true,
        port: 8080,
        proxy: {
            "/api": {
                target: "http://localhost",
                pathRewrite: {"^/api" : ""}
            }
        }
    }
};