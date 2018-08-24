import { Configuration } from 'webpack'

import {
  findPath
} from './path'

const config: Configuration = {

  entry: findPath('index'),

  externals: [
    '@reduxed/actions',
    'react',
    'redux',
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
  }

}

export default config
