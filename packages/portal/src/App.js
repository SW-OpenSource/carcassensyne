import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { LoginPage, RegisterPage, ProfilePage, ErrorPage } from 'pages'
import { theme, mui } from 'resources/styles/theme'
import GlobalStyles from 'resources/styles/global'
import Navbar from 'components/navbar'

const muiTheme = createMuiTheme(mui)

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>
      <Router>
        <div className="appContainer">
          <GlobalStyles />
          <Route path="**" component={Navbar} />
          <Switch>
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route render={props => <ErrorPage {...props} />} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
