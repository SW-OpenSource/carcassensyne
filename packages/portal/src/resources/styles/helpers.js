import { theme as t } from 'resources/styles/theme'

const pageContainer = theme => `
  background-color: ${theme.primary};
  width: 100%;
  height: calc(100vh - 50px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 1vw;
`

export { pageContainer }
