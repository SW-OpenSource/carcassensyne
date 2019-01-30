/* eslint-disable react/prop-types */
import React from 'react'
import { Auth } from 'utils'

const WithAuth = WrappedComponent => props => {
  if (Auth.validateToken()) {
    return <WrappedComponent {...props} />
  }
  const {
    history,
    history: {
      location: { pathname },
    },
  } = props
  if (!pathname.includes('/login') && !pathname.includes('/register')) {
    setTimeout(() => {
      history.push('/login')
    }, 100)
  }
  return <div />
}

export default WithAuth
