import {
  Configuration,
  LoaderOptionsPlugin
} from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'
import { dstPath } from '../shared/path'

const config: Configuration = smart(sharedConfig, {

  devtool: 'source-map',

  output: {
    path: dstPath,
    library: 'ReduxedTree',
    libraryTarget: 'commonjs2',
    filename: 'build.js'
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: true
    })
  ]

})

export default config
