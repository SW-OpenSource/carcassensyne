import PropTypes from 'prop-types'
import styled from 'styled-components'
import { paper } from 'resources/styles/helpers'

const Wrapper = styled.div`
  ${({ theme }) => paper(theme)};
  flex-direction: column;
  button {
    width: 90%;
    height: 50px;
    svg {
      margin-right: 12px;
    }
    &:not(:first-of-type) {
      margin-top: 12px;
    }
  }
`

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
}

Wrapper.defaultProps = {
  theme: {},
}

export default Wrapper
