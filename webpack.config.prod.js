const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'assets/js/app.[hash:10].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]'
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/static/favicon.ico',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/main.[hash:10].css'
    })
    // new CopyPlugin({
    //   patterns: [
    //     { from: '', to: '' }
    //   ]
    // })
  ]
};

module.exports = config;
