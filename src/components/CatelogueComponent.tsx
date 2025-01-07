

import React from 'react';
import styled from 'styled-components';
import CircularIcon from './CircularIcon';

const Wrapper = styled.div<{ backgroundImage : string }>`
  position: relative;
  background-image: url(${(props)=>props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  height: 520px;
  border-radius: 16px;
  padding: 16px;
  .top-header {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - 32px);
    padding: 16px;
    top: 0;
    left: 0;
    .catelogue-title { 
      width: 200px;
      text-transform: uppercase;
      margin: 0;
      font-size: 18px;
      font-weight: 400;
    }
  }
`;

type Props = {
  hText: string;
  link: string;
  icon: string;
};
const CatelogueComponent = (props: Props) => {
    const { hText, link, icon } = props;
    return (
    <Wrapper className='catelogue-style-wrapper' backgroundImage={icon}>
      <div className='top-header'>
        <h4 className='catelogue-title'>{hText}</h4>
        <CircularIcon icon='openNewTab.png'/>
      </div>
    </Wrapper>
  );
}
export default CatelogueComponent;
