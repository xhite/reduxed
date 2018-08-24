import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'
import { dstPath } from '../shared/path'


const config: Configuration = smart(sharedConfig, {

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },

  output: {
    filename: 'reduxed-actions.js',
    library: 'reduxedActions',
    libraryTarget: 'umd',
    path: dstPath
  }

})

export default config
