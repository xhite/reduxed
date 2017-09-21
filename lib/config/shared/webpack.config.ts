import {
  BannerPlugin,
  Configuration
} from 'webpack'

import {
  optimize
} from 'webpack'

import {
  findPath
} from './path'

const config: Configuration = {

  entry: findPath('main'),

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

  plugins: [
    new optimize.ModuleConcatenationPlugin(),
    new BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })
  ],

  target: 'node'

}

export default config
