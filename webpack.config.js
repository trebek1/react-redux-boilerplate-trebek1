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
    {test: /\.jsx?$/, loader: 'babel-loader',query : { presets: ["react", "es2015", "stage-1"]}},
    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader" }

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
