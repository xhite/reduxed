import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'


const config: Array<Configuration> = smart(sharedConfig, {

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
  }

})

export default config
