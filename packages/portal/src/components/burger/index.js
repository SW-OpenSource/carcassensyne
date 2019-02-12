import React from 'react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import UserIcon from '@material-ui/icons/AccountBox'
import ScoreSheetIcon from '@material-ui/icons/Receipt'
import { Auth } from 'utils'
import Logo from 'resources/images/logo.jpg'
import hero from 'resources/images/hero.svg'
import Drawer from './wrapper'

const BurgerMenu = props => {
  const { open, toggleMenu, navigateAway, history } = props
  const backgroundImage = {
    backgroundImage: `url(${hero})`,
  }
  if (!Auth.validateToken()) {
    return null
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
        <Button
          color="primary"
          variant="outlined"
          onClick={() => navigateAway('profile')}
          disabled={history.location.pathname.includes('profile')}
        >
          <UserIcon />
          Profile
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => navigateAway('score-sheet')}
          disabled={history.location.pathname.includes('score-sheet')}
        >
          <ScoreSheetIcon />
          Score Sheet
        </Button>
      </main>
      <footer>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            toggleMenu()
            Auth.handleLogout(history)
          }}
        >
          <LogoutIcon />
          Logout
        </Button>
      </footer>
    </Drawer>
  )
}

export default BurgerMenu
