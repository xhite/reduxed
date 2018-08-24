import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'


const config: Configuration = smart(sharedConfig, {

  devtool: 'source-map',
  mode: 'development'

})

export default config
