import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { theme } from '../resources/styles/theme'

const renderWithTheme = component =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

export { renderWithTheme }
