import * as carcassonne from 'resources/images/carcassonne'

const pageContainer = theme => `
  background-color: ${theme.primary};
  width: 100%;
  height: calc(100vh - 50px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 1vw;
`

const appBg = () => `
  background: url(${carcassonne.city1});
  background-position: bottom left;
  background-repeat: no-repeat
`

export { pageContainer, appBg }
