import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../text'
import { Wrapper } from './wrapper'

const LabelAndText = ({ label, text }) => (
  <Wrapper>
    <Text weight="bold">{label}</Text>
    <Text>{text}</Text>
  </Wrapper>
)

LabelAndText.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
}

export { LabelAndText }
