const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'zheng',
            template: "src/assets/index.html"
        }),
    ],
    module:{
      rules:[
          {
              test:/\.scss$/i,
              use:[
                  'style-loader',
                  'css-loader',
                  {
                      loader:"sass-loader",
                      options: {
                          implementation:require('dart-sass')
                      }

                  }
              ]
          }
      ]
    },
};