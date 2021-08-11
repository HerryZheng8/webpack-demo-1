const path = require('path');

module.exports = {
    mode: 'development',//开发者模式，最小化模式改为 production
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
};