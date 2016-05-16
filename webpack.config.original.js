var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
        entry: {
        javascript: "./index.jsx",
        html: "./index.html"
  },
  output: {
    filename: "index.js",
    path: __dirname + "/dist",
  },
  resolve : {
      extensions : ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }
    ]
  }
}