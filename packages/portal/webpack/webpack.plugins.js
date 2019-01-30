import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import npmPackage from '../package.json'

require('dotenv').config()

const { NODE_ENV, APP_NAME, DEV_API_URL, PROD_API_URL } = process.env

const isDev = NODE_ENV === 'development'

const env = new webpack.DefinePlugin({
  process: {
    env: {
      APP_NAME: JSON.stringify(APP_NAME),
      NODE_ENV: JSON.stringify(NODE_ENV),
      API_URL: JSON.stringify(isDev ? DEV_API_URL : PROD_API_URL),
    },
  },
})

const copy = new CopyWebpackPlugin([
  {
    from: './src/resources/images/app-icons',
    to: 'app-icons',
  },
])

const html = new HtmlWebpackPlugin({
  title: APP_NAME,
  filename: 'index.html',
  template: 'src/views/index.ejs',
  cache: !isDev,
  hash: !isDev,
  minify: !isDev,
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no',
    description: npmPackage.description,
  },
})

const hot = new webpack.HotModuleReplacementPlugin()

const clean = new CleanWebpackPlugin(['dist'], {
  verbose: true,
  watch: true,
})

export { env, copy, html, hot, clean }
