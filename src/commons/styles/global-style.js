import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    line-height: normal;
    .MuiPaper-elevation1{
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    background-color: #5d1f1fb5;
  }
  .MuiMenu-paper{
    background-color: #000;
  }
  }
  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }
  .mb-2 {
    margin-bottom: 16px;
  }
  .pt-2 {
    padding-top: 16px;
  }
  .cursor {
    cursor: pointer;
  }
`

export default globalStyle