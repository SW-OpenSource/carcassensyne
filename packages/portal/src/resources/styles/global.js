import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'
import RobotoBold from '../fonts/Roboto-Bold-webfont.woff'
import RobotoItalic from '../fonts/Roboto-Italic-webfont.woff'
import RobotoLight from '../fonts/Roboto-Light-webfont.woff'
import RobotoMedium from '../fonts/Roboto-Medium-webfont.woff'
import RobotoRegular from '../fonts/Roboto-Regular-webfont.woff'
import RobotoThin from '../fonts/Roboto-Thin-webfont.woff'
import JuiceLight from '../fonts/JUICE_Light-webfont.woff'
import JuiceRegular from '../fonts/JUICE_Regular-webfont.woff'
import JuiceBold from '../fonts/JUICE_Bold-webfont.woff'

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Juice';
    src: url(${JuiceLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Juice';
    src: url(${JuiceRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Juice';
    src: url(${JuiceBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  html, body {
    width: 100vw;
    min-height: 100vh;
  }

  body {
    font-family: 'Roboto', Arial;
    font-size: 18px;
    overflow: hidden;
    font-weight: 300;
    background: ${({ theme }) =>
      `linear-gradient(12deg, ${lighten(0.15, theme.primary)} 10%, ${
        theme.primary
      } 90%);`};
    color: ${({ theme }) => theme.text.dark}
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #app {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .appContainer {
    width: 100vw;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    overflow: hidden;
    padding: 0;
  }

`

export default GlobalStyles
