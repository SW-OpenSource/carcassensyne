import decode from 'jwt-decode'
import * as CONSTS from './consts'

const Auth = {
  // IS
  isToken: () => typeof localStorage.getItem(CONSTS.TOKEN) === 'string',
  // GET
  getToken: () => (Auth.isToken() ? localStorage.getItem(CONSTS.TOKEN) : undefined),
  getIdFromToken: () => decode(Auth.getToken())._id,
  // SET
  setToken: token => {
    localStorage.setItem(CONSTS.TOKEN, token)
  },
  // REMOVE
  removeToken: () => localStorage.removeItem(CONSTS.TOKEN),
  handleLogin: (response, history) => {
    const res = { ...response }
    if (res.data) {
      // console.group('%cAuth handleLogin', 'color: green')
      // console.log({ response })
      // console.groupEnd()
      if (typeof res.data.login === 'string') {
        Auth.setToken(res.data.login)
        history.replace('/')
      }
    } else if (res.error) {
      // const token = response.data.login
      // console.group('%cAuth handleLogin', 'color: tomato')
      // console.log({ response })
      // console.groupEnd()
    }
  },
  handleRegistration: (response, history) => {
    const res = { ...response }
    if (res.data) {
      // console.group('%cAuth handleLogin', 'color: green')
      // console.log({ response })
      // console.groupEnd()
      if (typeof res.data.register === 'string') {
        Auth.setToken(res.data.register)
        history.replace('/')
      }
    } else if (res.error) {
      // const token = response.data.login
      // console.group('%cAuth handleLogin', 'color: tomato')
      // console.log({ response })
      // console.groupEnd()
    }
  },
  validateToken: () => {
    if (Auth.isToken()) {
      const { exp } = decode(Auth.getToken())
      if (exp > new Date().getTime() / 1000) {
        return true
      }
    }
    return false
  },
  handleLogout: history => {
    Auth.removeToken()
    history.push('/')
  },
}

export { Auth }
