import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 75px;
    }
    h1 {
      margin: 34px auto;
      font-family: ${({ theme }) => theme.fontHeading};
      font-size: 10vw;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .content {
    width: 90%;
    margin: 18px 0;
    padding: 48px 12px;
    & > div:not(:first-of-type) {
      margin-top: 28px;
    }
  }
  .actions {
    width: 100%;
    display: flex;
    padding: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    button {
      width: 47.5%;
      height: 45px;
      &:first-of-type {
        background-color: ${({ theme }) => theme.white};
      }
      &:not(:first-of-type) {
        margin-left: 5%;
      }
    }
  }
`

export default Wrapper
