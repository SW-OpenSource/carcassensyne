import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: linear-gradient(to bottom, #3f4c6b, #606c88);
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
      color: ${({ theme }) => theme.text.light};
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
      color: ${({ theme }) => theme.text.light};
      transition: ${({ theme }) => theme.transition.fast};
      &.active {
        transition: ${({ theme }) => theme.transition.fast};
        color: ${props => props.theme.text.dark};
        background-color: ${({ theme }) => theme.text.light};
      }
      &:disabled {
        color: ${props => lighten(0.3, props.theme.grey)};
      }
    }
  }

  .burger {
    margin-left: auto;
    button {
      color: ${({ theme }) => theme.text.light};
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
