import { createGlobalStyle } from 'styled-components';

const GeneralStyle = createGlobalStyle`
  body {
    background-image: url('background.webp');
    background-size: cover;
    margin: 0;
    padding: 60px 0;
    display: flex;
    justify-content: center;
  }
  #root {
    height: calc(100vh - 60px);
    width: 80%;
    background: #fff;
  }
  `;

export default GeneralStyle;
