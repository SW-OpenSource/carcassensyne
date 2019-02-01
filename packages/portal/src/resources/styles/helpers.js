import { rgba } from 'polished'
import * as carcassonne from 'resources/images/carcassonne'

const pageContainer = () => `
  background: linear-gradient(to bottom, ${rgba('#3f4c6b', 0.9)}, ${rgba('#606c88', 0.9)});
  width: 98%;
  height: calc(98% - 50px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px;
  margin: 2% auto 0;
  border-radius: 2.5px;
`

const appBg = () => `
  background: url(${carcassonne.city1}), url(${carcassonne.city1rse}), url(${carcassonne.city1rsw}),
              url(${carcassonne.city1rswe}), url(${carcassonne.city1rwe}), url(${carcassonne.city2nw}),
              url(${carcassonne.city2nwr}), url(${carcassonne.city2nws}), url(${carcassonne.city2nwsr}),
              url(${carcassonne.city2we}), url(${carcassonne.city2wes}), url(${carcassonne.city3}),
              url(${carcassonne.city3r}), url(${carcassonne.city3s}), url(${carcassonne.city3s}),
              url(${carcassonne.city3sr}), url(${carcassonne.city4}), url(${carcassonne.city11ne});
  background-position: 0 100%, 50% 100%, 100% 100%,
                       0 77%, 50% 77%, 100% 77%,
                       0 54%, 50% 54%, 100% 54%,
                       0 31%, 50% 31%, 100% 31%,
                       0 10%, 50% 10%, 100% 10%,
                       0 -13%, 50% -13%, 100% -13%;
  background-repeat: no-repeat;
  background-size: 33.33333%;
`

export { pageContainer, appBg }
