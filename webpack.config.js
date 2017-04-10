var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index', 
    './src/css/home.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.jsx$/, loaders: ["react-hot", "jsx-loader"], include: path.join(__dirname, "src") },
    {test: /\.jsx?$/, loader: 'babel-loader'},
    { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    alias: {
      App: 'src/components/App.jsx'
    }
  }
};
