import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import NewGameIcon from '@material-ui/icons/Games'
import RecordResultIcon from '@material-ui/icons/NoteAdd'
import Wrapper from './wrapper'

class RecordResults extends PureComponent {
  render() {
    const { startNewGame, recordGameResults } = this.props
    return <Wrapper>Record Results</Wrapper>
  }
}

RecordResults.propTypes = {
  startNewGame: PropTypes.func.isRequired,
  recordGameResults: PropTypes.func.isRequired,
}

export { RecordResults }
