import { Radio } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

type Props = {
  buttonText: React.ReactNode;
};
const RadioButtonText = (props: Props) => {
  const { buttonText } = props;
  return (
    <Wrapper className='raddio-button-wrapper'>
    <Radio/>
      {buttonText}
    </Wrapper>
  );
}
export default RadioButtonText;
