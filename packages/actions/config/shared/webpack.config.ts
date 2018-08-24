import { Configuration } from 'webpack'

import {
  dstPath,
  findPath
} from './path'


const config: Configuration = {

  entry: findPath('index'),

  externals: [
    'react',
    'react-redux',
    'redux-actions',
    'reselect'
  ],

  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      }
    ]
  },

  output: {
    filename: 'reduxed-actions.js',
    library: 'reduxedActions',
    libraryTarget: 'umd',
    path: dstPath
  }

}

export default config
