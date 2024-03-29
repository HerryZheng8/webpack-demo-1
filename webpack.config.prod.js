const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base')

module.exports = {
    ...base,
    mode: 'production',//开发者模式，最小化模式改为 production
    plugins: [
    ...base.plugins,
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder:false,
        }),
    ],

        module: {
            rules: [
                ...base.module.rules,
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "../",
                            },
                        },
                        "css-loader",
                    ],
                },
            ],
        },
};
