import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(<App />, document.getElementById('app'))

module.hot.accept('./App.js', () => {
  // eslint-disable-next-line global-require
  const NextRootContainer = require('./App.js').default
  render(<NextRootContainer />, document.getElementById('app'))
})
