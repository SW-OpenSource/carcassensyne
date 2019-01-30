import path from 'path'
import PATHS from './webpack.paths'
import ALIASES from './webpack.aliases'

const { NODE_ENV, PORT } = process.env

const isDev = NODE_ENV === 'development'

const hotMiddlewareScript = `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`

export default {
  mode: NODE_ENV,
  target: 'web',
  entry: isDev
    ? ['react-hot-loader/patch', hotMiddlewareScript, '@babel/polyfill', path.resolve(PATHS.src, 'index.js')]
    : ['@babel/polyfill', path.resolve(PATHS.src, 'index.js')],
  output: {
    path: path.resolve(PATHS.dist),
    filename: 'assets/js/app-bundle.js',
    publicPath: '/',
  },
  devtool: isDev ? 'eval-source-map' : '',
  devServer: {
    publicPath: '/assets/',
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: 'errors-only',
    port: 8080,
    hot: true,
    host: '0.0.0.0',
    contentBase: path.resolve(PATHS.src, 'views'),
    watchContentBase: true,
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
