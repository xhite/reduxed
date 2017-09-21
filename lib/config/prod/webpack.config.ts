import { dstPath } from  '../shared/path'

import {
  Configuration,
  LoaderOptionsPlugin,
  optimize
} from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'

const config: Configuration = smart(sharedConfig, {

  output: {
    path: dstPath,
    library: 'ReduxedTree',
    libraryTarget: 'commonjs2',
    filename: `build.min.js`
  },

  plugins: [
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new optimize.UglifyJsPlugin({
      compress: true
    })
  ]

})

export default config
