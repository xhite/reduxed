import { dstPath } from  '../shared/path'

import {
  Configuration,
  LoaderOptionsPlugin,
  optimize
} from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'

const targetFormats: Array<any> = [
  'amd',
  'commonjs',
  'umd'
]

const config: Array<Configuration> = targetFormats.map((format: any): Configuration => smart(sharedConfig, {

  output: {
    path: dstPath,
    library: '@redux-tree',
    libraryTarget: format,
    filename: `build.${format}.js`
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

}))

export default config
