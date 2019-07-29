import React from 'react';
import {
  Wrapper,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight
} from './Loading.styles';

const Loading = () => {
  return (
    <Wrapper>
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <BottomRight />
    </Wrapper>
  );
};

export default Loading;
