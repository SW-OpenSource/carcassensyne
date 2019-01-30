import path from 'path'
import PATHS from './webpack.paths'
import ALIASES from './webpack.aliases'

require('dotenv').config()

const { NODE_ENV, PORT } = process.env

const isDev = NODE_ENV === 'development'

// const hotMiddlewareScript = `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`

export default {
  mode: NODE_ENV,
  target: 'web',
  entry: isDev
    ? ['@babel/polyfill', path.resolve(PATHS.src, 'index.js')]
    : ['@babel/polyfill', path.resolve(PATHS.src, 'index.js')],
  output: {
    path: path.resolve(PATHS.dist),
    filename: 'assets/js/app-bundle.js',
    publicPath: '/',
  },
  devtool: isDev ? 'eval-source-map' : '',
  devServer: {
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: 'errors-only',
    port: PORT || 8080,
    hot: true,
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      ...ALIASES,
    },
    mainFields: ['browser', 'main', 'module'],
  },
}
