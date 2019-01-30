import PropTypes from 'prop-types'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import styled, { css } from 'styled-components'
import { darken, lighten, rgba } from 'polished'

const Drawer = styled(SwipeableDrawer)`
  .drawerBody {
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    & > * {
      width: 100%;
    }
  }
  header {
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 125px;
    }
  }
  main {
    padding: 24px 12px;
    button {
    }
  }
  footer {
    margin-top: auto;
    padding: 12px;
    button {
    }
  }
  main,
  footer {
    button {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      svg {
        margin-right: 12px;
      }
    }
  }
`
export default Drawer
