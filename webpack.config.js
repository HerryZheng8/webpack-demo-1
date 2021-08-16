const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base')

module.exports = {
    ...base,
        module: {
            rules: [
                ...base.module.rules,
                {
                    test: /\.css$/i,
                    use: ["style-loader","css-loader",],
                },
            ],
        },
};
