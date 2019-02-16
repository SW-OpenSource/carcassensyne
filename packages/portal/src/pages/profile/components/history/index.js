import React from 'react'
import PropTypes from 'prop-types'
import { getIconByName } from 'resources/images/icons/index'
import Wrapper from './wrapper'

const MyHistory = ({ games }) => {
  if (games.length === 0) {
    return (
      <Wrapper>
        <div className="col1">
          <img src={getIconByName('support')} alt="No Lists" />
        </div>
        <div className="col2">
          <h1>Huston we have a problem!</h1>
          <p>No games found!!</p>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h1>Lists</h1>
    </Wrapper>
  )
}

MyHistory.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({})),
}

MyHistory.defaultProps = {
  games: [],
}

export { MyHistory }
