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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
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