import React from 'react'
import PropTypes from 'prop-types'
import MDSpinner from 'react-md-spinner'
import { theme } from 'resources/styles/theme'
import Wrapper from './Wrapper'

const Loading = props => {
  const { color1, color2, color3, color4, size } = props
  return (
    <Wrapper>
      <MDSpinner color1={color1} color2={color2} color3={color3} color4={color4} size={size} />
    </Wrapper>
  )
}

Loading.propTypes = {
  size: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  color4: PropTypes.string,
}

Loading.defaultProps = {
  size: 28,
  color1: 'rgb(66, 165, 245)',
  color2: 'rgb(239, 83, 80)',
  color3: 'rgb(253, 216, 53)',
  color4: 'rgb(76, 175, 80)',
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
