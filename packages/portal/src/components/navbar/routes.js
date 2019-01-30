import React from 'react'
import AccountBox from '@material-ui/icons/AccountBox'
import AccountBalance from '@material-ui/icons/AccountBalance'
import Lock from '@material-ui/icons/Lock'

const routes = [
  {
    path: '/profile',
    label: 'My Profile',
    icon: <AccountBox />,
    isActive: false,
    disabled: false,
  },
  {
    path: '/accounts',
    label: 'Accounts',
    icon: <AccountBalance />,
    isActive: false,
    disabled: false,
  },
  {
    path: '/dashboard',
    label: 'dashboard',
    icon: <Lock />,
    isActive: false,
    disabled: true,
  },
]

export default routes
