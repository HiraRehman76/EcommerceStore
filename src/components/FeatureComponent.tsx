
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #F3F3F3;
  cursor: pointer;
  /* width: 220px;  */
  /* height: 95px; */
  border-radius: 16px;
  padding: 16px;
  .feature-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  .feature-title { 
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 8px;
    font-size: 18px;
  }
  .feature-description {
    margin: 0;
  }
`;

type Props = {
  hText: string;
  pText: string;
  icon: string;
};
const FeatureComponent = (props: Props) => {
    const { hText, pText, icon } = props;
    return (
    <Wrapper>
      <img src={icon} alt='feature-icon' className='feature-icon'/>
      <h4 className='feature-title'>{hText}</h4>
      <p className='feature-description'>{pText}</p>
    </Wrapper>
  );
}
export default FeatureComponent;
