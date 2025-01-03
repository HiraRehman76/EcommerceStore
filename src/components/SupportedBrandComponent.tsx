

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3F3F3;
  cursor: pointer;
  /* width: 220px;  */
  height: 95px;
  border-radius: 16px;
  img {
    /* width: 65%; */
    height: 65%;
    object-fit: cover;
  }
`;

type Props = {
chilldren: React.ReactNode;
};
const SupportedBrandComponent = (props: Props) => {
    const { chilldren } = props;
    return (
    <Wrapper>
      {chilldren}
    </Wrapper>
  );
}
export default SupportedBrandComponent;
