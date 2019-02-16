import React, { Component } from 'react'
import Loading from 'components/loading'
import WithAuth from 'components/withAuth'
import { UserQueries } from 'gql'
import { StartGame } from './components'
import Wrapper from './wrapper'

class NewGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      isNewGame: false,
      isRecordResults: false,
    }
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = () => {
    const { user } = this.state
    if (user === undefined) {
      UserQueries.me()
        .catch(err => console.log(err))
        .then(response => this.setState({ user: response.data.me }))
    }
  }

  startNewGame = () => {
    this.setState(prevState => ({
      isNewGame: !prevState.isNewGame,
    }))
  }

  recordGameResults = () => {
    this.setState(prevState => ({
      isRecordResults: !prevState.isRecordResults,
    }))
  }

  render() {
    const { user } = this.state
    if (user === undefined) {
      return <Loading />
    }

    return (
      <Wrapper>
        <StartGame startNewGame={this.startNewGame} recordGameResults={this.recordGameResults} />
      </Wrapper>
    )
  }
}

NewGame.propTypes = {}

NewGame.defaultProps = {}

const NewGamePage = WithAuth(NewGame)

export { NewGamePage }
