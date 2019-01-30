import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Text from 'components/text'
import Wrapper from './wrapper'

class Sidebar extends Component {
  state = {
    open: false,
  }

  componentDidMount() {
    this.setState({ open: true })
  }

  handleOnClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { children, actions, side, title } = this.props
    const { open } = this.state
    return (
      <Drawer anchor={`${side}`} open={open}>
        <Wrapper>
          <header className="header">
            <div className="close">
              <IconButton aria-label="close" onClick={this.handleOnClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
            <Text weight="bold" className="title">
              {title}
            </Text>
          </header>
          <section className="actions">
            {actions.map(action => (
              <Button
                key={JSON.stringify({
                  key: `${action.text}|${action.varian}`,
                })}
                color={action.color}
                variant={action.variant}
                size={action.size}
                onClick={action.func}
              >
                <span className="icon">{action.icon}</span>
                <span className="text">{action.text}</span>
              </Button>
            ))}
          </section>
          <section className="body">{children}</section>
        </Wrapper>
      </Drawer>
    )
  }
}

Sidebar.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
      icon: PropTypes.node,
      func: PropTypes.func,
      variant: PropTypes.oneOf([
        'text',
        'outlined',
        'contained',
        'fab',
        'extendedFab',
        'flat',
        'raised',
      ]),
      color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
      size: PropTypes.oneOf(['small', 'medium', 'large']),
    }),
  ),
  side: PropTypes.oneOf(['top', 'bottom', 'roght', 'left']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
}

Sidebar.defaultProps = {
  children: <div />,
  actions: [],
  side: 'right',
  title: '',
}

export { Sidebar }
