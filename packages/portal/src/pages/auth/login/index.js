import React from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import { toast } from 'react-toastify'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Auth } from 'utils'
import { AuthQueries } from 'gql'
import logo from 'resources/images/logo.jpg'
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

  handleOnChange = event => this.setState({ [event.target.name]: event.target.value })

  handleOnLogin = () => {
    const { username, password } = this.state
    const { history } = this.props
    AuthQueries.login(username, password)
      .catch(err => console.error(err))
      .then(response => {
        Auth.handleLogin(response, history)
        toast.success(`Welcome back ${username}`, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
        })
      })
  }

  navigateToRegister = () => {
    const { history } = this.props
    history.push('/register')
  }

  render() {
    const { username, password } = this.state
    const { APP_NAME } = process.env
    return (
      <Wrapper>
        <div className="header">
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
        <div className="actions">
          <Button onClick={this.navigateToRegister} variant="outlined">
            Register
          </Button>
          <Button onClick={() => this.handleOnLogin()} variant="contained" color="primary">
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
