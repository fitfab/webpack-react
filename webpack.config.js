module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.jsx",
    html: "./index.html" 
  },
  output: {
    filename: "app.js",
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
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },

      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]" }
    ]
  }
}