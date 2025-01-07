
import React from 'react';
import styled from 'styled-components';
import { primaryHeadingColor } from '../utilis/utilisStyle';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  width: 20px; 
  height: 20px;
  border: 1px solid ${primaryHeadingColor};
  border-radius: 50%;
  .image-inside {
    width: 65%;
    height: 65%;
    object-fit: cover;
  }
`;

type Props = {
  icon: string;
};
const CircularIcon = (props: Props) => {
  const { icon } = props;
  return (
    <Wrapper className='circular-icon-wrapper'>
      <img src={icon} alt='cart-icon' className='image-inside'/>
    </Wrapper>
  );
}
export default CircularIcon;
