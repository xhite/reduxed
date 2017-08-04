import { Configuration } from 'webpack'

import devConfig from './dev/webpack.config'
import prodConfig from './prod/webpack.config'

const configs: { [env: string]: Configuration|Array<Configuration> } = {
  dev: devConfig,
  prod: prodConfig
}

export default (env: string = 'prod'): Configuration|Array<Configuration> => configs[env]
