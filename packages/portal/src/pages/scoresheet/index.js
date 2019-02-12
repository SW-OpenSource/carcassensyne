import React, { Component } from 'react'
import Loading from 'components/loading'
import WithAuth from 'components/withAuth'
import { UserQueries } from 'gql'
import Wrapper from './wrapper'

class ScoreSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
    }
  }

  componentDidMount() {
    const { user } = this.state
    if (user === undefined) {
      UserQueries.me()
        .catch(err => console.log(err))
        .then(response => this.setState({ user: response.data.me }))
    }
  }

  loadUser = () => {}

  render() {
    const { user } = this.state
    if (user === undefined) {
      return <Loading />
    }

    return <Wrapper>score sheet</Wrapper>
  }
}

ScoreSheet.propTypes = {}

ScoreSheet.defaultProps = {}

const ScoreSheetPage = WithAuth(ScoreSheet)

export { ScoreSheetPage }
