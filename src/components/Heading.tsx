
import React from 'react';
import styled from 'styled-components';
import { primaryHeadingColor } from '../utilis/utilisStyle';

const Wrapper = styled.h1`
  text-align: center;
  color: ${primaryHeadingColor};
`;

type Props = {
  text: string;
};
const Heading = (props: Props) => {
  const { text } = props;
  return (
    <Wrapper>
      {text}
    </Wrapper>
  );
}
export default Heading;
