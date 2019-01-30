import React from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Auth } from 'utils'
import { AuthQueries } from 'gql'
import hero from 'resources/images/hero.svg'
import logo from 'resources/images/logo/icon-152x152.png'
import Wrapper from './wrapper'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    const { history } = this.props
    if (Auth.validateToken()) {
      history.push('/')
    }
  }

  handleOnChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  handleOnLogin = () => {
    const { username, password } = this.state
    const { history } = this.props
    AuthQueries.login(username, password)
      .catch(err => console.error(err))
      .then(response => Auth.handleLogin(response, history))
  }

  navigateToRegister = () => {
    const { history } = this.props
    history.push('/register')
  }

  render() {
    const { username, password } = this.state
    const { APP_NAME } = process.env
    const backgroundImage = {
      backgroundImage: `url(${hero})`,
    }
    return (
      <Wrapper>
        <div className="header" style={backgroundImage}>
          <img src={logo} alt={`${APP_NAME} logo`} />
          <h1>{APP_NAME}</h1>
        </div>
        <Card className="content">
          <TextField
            id="username"
            name="username"
            label="Username"
            value={username}
            onChange={this.handleOnChange}
            autoFocus
            fullWidth
            autoComplete="username"
            onKeyPress={event => {
              if (keycode(event) === 'enter') {
                this.handleOnLogin()
              }
            }}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleOnChange}
            autoComplete="password"
            fullWidth
            onKeyPress={event => {
              if (keycode(event) === 'enter') {
                this.handleOnLogin()
              }
            }}
          />
        </Card>
        <div className="actions" style={backgroundImage}>
          <Button onClick={this.navigateToRegister} variant="outlined">
            Register
          </Button>
          <Button
            onClick={() => this.handleOnLogin()}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
      </Wrapper>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({}),
}

LoginPage.defaultProps = {
  history: {},
}

export { LoginPage }
