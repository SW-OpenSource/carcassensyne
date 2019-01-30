import PropTypes from 'prop-types'
import styled from 'styled-components'

const getWeightNumber = weight =>
  [
    { name: 'thin', number: 300 },
    { name: 'normal', number: 400 },
    { name: 'bold', number: 600 },
  ].find(w => w.name === weight).number

const Text = styled.p`
  color: ${props => props.color};
  font-size: 1em;
  font-weight: ${props => getWeightNumber(props.weight)};
`

Text.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.oneOf(['thin', 'normal', 'bold']),
}

Text.defaultProps = {
  color: '#333',
  weight: 'normal',
}

export { Text }
