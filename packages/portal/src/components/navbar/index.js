import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import WithAuth from 'components/withAuth'
import BurgerMenu from 'components/burger'
import routes from './routes'
import Wrapper from './wrapper'
import { Auth } from 'utils'

class Navbar extends Component {
  state = {
    navLinks: routes,
    burgerOpen: false,
  }

  componentDidMount() {
    this.updateLinksState()
  }

  componentDidUpdate() {
    this.updateLinksState()
  }

  handleOnClick = link => {
    const {
      history,
      history: {
        location: { pathname },
      },
    } = this.props
    if (!pathname.includes(link.path)) {
      this.updateLinksState(link.path)
      history.push(link.path)
    }
  }

  updateLinksState = () => {
    const { navLinks } = this.state
    const {
      history: {
        location: { pathname },
      },
    } = this.props

    const toggleOn = link => link.isActive === true
    const toggleOff = link => link.isActive === false
    const isPath = link => link.path.includes(pathname)

    const activeLink = navLinks.find(link => pathname.includes(link.path))
    if (activeLink && activeLink.isActive === false) {
      navLinks.forEach(navLink => {
        if (navLink.path.includes(pathname)) {
          navLink.isActive = true
        } else {
          navLink.isActive = false
        }
      })
      this.setState({ navLinks })
    }
  }

  toggleMenu = () => this.setState(prevState => ({ burgerOpen: !prevState.burgerOpen }))

  navigateAway = page => {
    const { history } = this.props
    this.setState(
      prevState => ({ burgerOpen: !prevState.burgerOpen }),
      () => {
        history.push(`/${page}`)
        this.updateLinksState()
      },
    )
  }

  render() {
    const { navLinks, burgerOpen } = this.state
    const { history } = this.props
    return (
      <Wrapper>
        <div className="brand">
          <h1>CarcasSensyne</h1>
        </div>
        {/* <div className="navigation">
          {navLinks.map(link => (
            <IconButton
              key={link.path}
              aria-label={link.label}
              className={link.isActive ? 'active' : ''}
              onClick={() => this.handleOnClick(link)}
              disableRipple
              disabled={link.disabled}
            >
              {link.icon}
            </IconButton>
          ))}
        </div> */}
        <div className="burger">
          <IconButton aria-label="burger menu" onClick={() => this.toggleMenu()} disableRipple>
            <MenuIcon />
          </IconButton>
        </div>
        <BurgerMenu open={burgerOpen} toggleMenu={this.toggleMenu} navigateAway={this.navigateAway} history={history} />
      </Wrapper>
    )
  }
}

Navbar.propTypes = {
  history: PropTypes.shape({}),
}

Navbar.defaultProps = {
  history: {},
}

export default WithAuth(Navbar)
