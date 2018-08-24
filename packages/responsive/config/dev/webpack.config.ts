import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'
import { dstPath } from '../shared/path'


const config: Configuration = smart(sharedConfig, {

  mode: 'development',

  devtool: 'source-map',

  output: {
    filename: 'reduxed-responsive.js',
    library: 'reduxedResponsive',
    libraryTarget: 'umd',
    path: dstPath
  }

})

export default config
