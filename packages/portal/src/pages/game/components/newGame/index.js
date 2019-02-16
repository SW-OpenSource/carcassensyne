import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import NewGameIcon from '@material-ui/icons/Games'
import RecordResultIcon from '@material-ui/icons/NoteAdd'
import Wrapper from './wrapper'

class NewGame extends PureComponent {
  render() {
    const { startNewGame, recordGameResults } = this.props
    return <Wrapper>NEW GAME</Wrapper>
  }
}

NewGame.propTypes = {
  startNewGame: PropTypes.func.isRequired,
  recordGameResults: PropTypes.func.isRequired,
}

export { NewGame }
