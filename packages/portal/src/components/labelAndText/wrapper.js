import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  & > p:first-of-type {
    flex: 1;
  }
`

export { Wrapper }
