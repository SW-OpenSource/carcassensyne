import React from 'react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import UserIcon from '@material-ui/icons/AccountBox'
import WithAuth from 'components/withAuth'
import { Auth } from 'utils'
import Logo from 'resources/images/logo.jpg'
import hero from 'resources/images/hero.svg'
import Drawer from './wrapper'

const BurgerMenu = props => {
  const { open, toggleMenu, navigateAway, history } = props
  const backgroundImage = {
    backgroundImage: `url(${hero})`,
  }
  return (
    <Drawer
      open={open}
      onClose={() => toggleMenu()}
      onOpen={() => toggleMenu()}
      anchor="right"
      classes={{ paper: 'drawerBody' }}
    >
      <header style={backgroundImage}>
        <img src={Logo} alt="List Awesome Logo" />
      </header>
      <main>
        <Button color="primary" variant="outlined" onClick={() => navigateAway('profile')}>
          <UserIcon />
          Profile
        </Button>
      </main>
      <footer>
        <Button color="secondary" variant="outlined" onClick={() => Auth.handleLogout(history)}>
          <LogoutIcon />
          Logout
        </Button>
      </footer>
    </Drawer>
  )
}

export default WithAuth(BurgerMenu)
