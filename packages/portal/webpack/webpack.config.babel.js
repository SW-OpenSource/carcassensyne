import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import common from './webpack.common'
import { env, copy, html, hot, clean } from './webpack.plugins'
import { js, image, font, html as htmlloader } from './webpack.loaders'

const isDev = process.env.NODE_ENV === 'development'

const config = {
  ...common,
  module: {
    rules: [js, image, font, htmlloader],
  },
  plugins: [env, html, clean],
}

if (isDev) {
  config.plugins = [...config.plugins, hot]
} else {
  config.plugins = [...config.plugins, copy]
  config.optimization = {
    minimizer: [new UglifyJsPlugin()],
  }
}

export default config
