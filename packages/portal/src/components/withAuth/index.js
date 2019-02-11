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

  history.push('/login')

  return <div />
}

export default WithAuth
