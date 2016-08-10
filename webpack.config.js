var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: './dist',
    filename: 'main.min.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src', 'js'),
        ],
        test: /\.jsx?$/,
        // Babel config
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
    	compress: {
            drop_console: true
        }
	})
  ]
};