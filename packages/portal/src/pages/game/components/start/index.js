import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import NewGameIcon from '@material-ui/icons/Games'
import RecordResultIcon from '@material-ui/icons/NoteAdd'
import Wrapper from './wrapper'

class StartGame extends PureComponent {
  render() {
    const { startNewGame, recordGameResults } = this.props
    return (
      <Wrapper>
        <Button color="primary" variant="outlined" onClick={() => startNewGame()}>
          <NewGameIcon />
          Start a new Game
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => recordGameResults()}>
          <RecordResultIcon />
          Record end game results
        </Button>
      </Wrapper>
    )
  }
}

StartGame.propTypes = {
  startNewGame: PropTypes.func.isRequired,
  recordGameResults: PropTypes.func.isRequired,
}

export { StartGame }
