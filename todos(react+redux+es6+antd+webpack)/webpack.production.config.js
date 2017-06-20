const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const os = require('os');

/* eslint-disable */

// antd-mobile 1.0 Icon
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, '')
];

module.exports = {
    entry: {
        app: path.join(__dirname, 'src/main'),
        vendor: [
            'antd-mobile',
            'babel-polyfill',
            'classnames',
            'immutable',
            'pure-render-decorator',
            'rc-form',
            'react',
            'react-dom',
            'react-fastclick',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'superagent',
            'weixin-js-sdk'
        ]
    },
    output: {
        path: path.join(__dirname, './compile'),
        publicPath: '/',
        filename: 'bundle-[chunkhash:6].js'
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
                use: 'url-loader?limit=1000&name=images/[name]-[hash:6].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.tpl.html')
        }),
        new ExtractTextPlugin({
            filename: '[name]-[chunkhash:6].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'common-[chunkhash:6].js'
        }),
        new CleanWebpackPlugin(['compile'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false,
            exclude: [

            ]
        }),
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            workerCount: os.cpus().length,
            uglifyJS: {
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            '_global.proxy': JSON.stringify('http://localhost:80')
        })
    ]
};