const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: ['babel-loader'],
}

const image = {
  test: /\.(jpe?g|gif|png|svg)($|\?)/i,
  exclude: /node_modules/,
  loader: 'url-loader',
  options: {
    limit: 1000,
    name: 'images/[hash].[ext]',
  },
}

const font = {
  test: /\.(woff|woff2|eot|ttf)$/,
  loader: 'url-loader?limit=1000&name=fonts/[hash:24].[ext]',
  exclude: /node_modules/,
}

const html = {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
  },
}

export { js, image, font, html }
