let path = require('path');
let HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// 模块 happypack 可以实现多线程来打包
let Happypack = require('happypack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: '3000',
        contentBase: './dist'
    },
    module: {
        noParse: /jquery/, // 不去解析jquery中的依赖库
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
            // use: 'Happypack/loader?id=js',

        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        // new Happypack({
        //     id: 'js',
        //     use: [{
        //         loader: 'babel-loader',
        //         options: {
        //             presets: [
        //                 '@babel/preset-env',
        //                 '@babel/preset-react'
        //             ]
        //         }
        //     }]
        // }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        }),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/), //打包忽略
        new HtmlWebPackPlugin({
            template: './public/index.html'
        })
    ]
}