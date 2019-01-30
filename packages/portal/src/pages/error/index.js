import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/text'
import { Wrapper } from './wrapper'

// eslint-disable-next-line no-unused-vars
class ErrorPage extends React.Component {
  componentDidMount() {
    this.redirect()
  }

  componentDidUpdate() {
    this.redirect()
  }

  redirect = () => {
    const {
      history,
      history: {
        location: { pathname },
      },
    } = this.props

    if (!pathname.includes('/404')) {
      history.push('/404')
    }
  }

  render() {
    return (
      <Wrapper>
        <Text weight="bold">404</Text>
        <Text>Are you lost?</Text>
      </Wrapper>
    )
  }
}

ErrorPage.propTypes = {
  history: PropTypes.shape({}),
}

ErrorPage.defaultProps = {
  history: {},
}

export { ErrorPage }
