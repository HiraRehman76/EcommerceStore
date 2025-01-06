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
  .container {
    /* height: calc(100vh); */
    height: fit-content;
    padding: 1rem;
    background: #fff;
  }
  .radio-button-bar {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .ant-radio-wrapper {
    &:hover {
      .ant-radio-inner {
        border-color: #000;
      }
    }
    &::after {

    }
    .ant-radio {
      &::after {

      }
      &.ant-radio-checked {
        .ant-radio-inner {
          border-color: #000;
          background-color: #000;
          &::after {
            background-color: #000;
          }
        }
      }
    }
  }
  `;

export default GeneralStyle;
