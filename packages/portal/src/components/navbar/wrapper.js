import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten, rgba } from 'polished'

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: linear-gradient(to bottom, ${rgba('#f1f1f1', 0.5)}, ${rgba('#fff', 0.8)});
  border-bottom-left-radius: 2.5px;
  border-bottom-right-radius: 2.55px;
  overflow: hidden;
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* width: 50px; */
    padding: 7px 7px 0 12px;
    h1 {
      font-family: ${({ theme }) => theme.fontHeading};
      color: ${({ theme }) => theme.text.dark};
      font-size: 20px;
      word-spacing: 10px;
      line-height: 1;
    }
  }
  .navigation {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    button {
      height: 50px;
      border-radius: 0;
      color: ${({ theme }) => theme.text.dark};
      transition: ${({ theme }) => theme.transition.fast};
      &.active {
        transition: ${({ theme }) => theme.transition.fast};
        color: ${props => props.theme.text.dark};
        background-color: ${({ theme }) => theme.text.dark};
      }
      &:disabled {
        color: ${props => lighten(0.3, props.theme.grey)};
      }
    }
  }

  .burger {
    margin-left: auto;
    button {
      color: ${({ theme }) => theme.text.dark};
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
