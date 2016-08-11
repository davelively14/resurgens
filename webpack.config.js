'use strict'

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

function root(dest) { return path.resolve(__dirname, dest) }
function web(dest) { return root('web/static/' + dest) }

var config = module.exports = {
  entry: {
    application: [
      web('css/application.sass'),
      web('js/application.js')
    ],
  },

  output: {
    path: root('priv/static/'),
    filename: 'js/application.js'
  },

  resolve: {
    extension: ['', '.js', '.sass'],
    modulesDirectories: ['node_modules']
  },

  module: {
    noParse: /vendor\/phoenix/,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax&includePaths[]=' + __dirname +  '/node_modules')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/application.css')
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  )
}
