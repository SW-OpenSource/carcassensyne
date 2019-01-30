import React from 'react'
import PropTypes from 'prop-types'
import { rgba } from 'polished'
import ReactLoading from 'react-loading'
import { theme } from 'resources/styles/theme'
import Wrapper from './Wrapper'

const Loading = ({ type, color, width, height }) => (
  <Wrapper>
    <ReactLoading type={type} color={color} height={height} width={width} />
  </Wrapper>
)

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

Loading.defaultProps = {
  type: 'bars',
  color: rgba(theme.primary, 0.75),
  width: 75,
  height: 75,
}

/*
blank
balls
bars
bubbles
cubes
cylon
spokes
spin
spinningBubbles
*/

export default Loading
