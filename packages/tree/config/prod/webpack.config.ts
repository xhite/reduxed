import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'
import { dstPath } from '../shared/path'


const config: Configuration = smart(sharedConfig, {

  mode: 'production',

  output: {
    filename: 'reduxed-tree.js',
    library: 'reduxedTree',
    libraryTarget: 'umd',
    path: dstPath
  }

})

export default config
