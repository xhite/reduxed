import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import sharedConfig from '../shared/webpack.config'


const config: Configuration = smart(sharedConfig, {

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

  mode: 'production'

})

export default config
