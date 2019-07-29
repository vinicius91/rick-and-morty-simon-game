import React from 'react';
import {
  Wrapper,
  Portal,
  Swish,
  Swirl,
  SwirlSpanOne,
  SwirlSpanTwo,
  SwirlSpanThree,
  SwirlDouble,
  SwirlTriple,
  SwirlSpecial,
  SwishSpanOne,
  SwishSpanTwo,
  SwishSpanThree,
  SwishSpanFour
} from './Loading.styles';

const Loading = () => {
  return (
    <Wrapper>
      <Portal>
        <Swish>
          <SwishSpanOne />
          <SwishSpanTwo />
          <SwishSpanThree />
          <SwishSpanFour />
        </Swish>
        <Swirl>
          <SwirlSpanOne />
          <SwirlSpanTwo />
          <SwirlSpanThree />
          <SwirlDouble>
            <SwirlSpanOne />
            <SwirlTriple>
              <SwirlSpanOne />
              <SwirlTriple>
                <SwirlSpanOne />
                <SwirlTriple>
                  <SwirlSpanOne />
                  <SwirlSpecial>
                    <SwirlSpanOne />
                    <SwirlTriple>
                      <SwirlSpanOne />
                      <SwirlSpecial>
                        <SwirlSpanOne />
                      </SwirlSpecial>
                    </SwirlTriple>
                  </SwirlSpecial>
                </SwirlTriple>
              </SwirlTriple>
            </SwirlTriple>
          </SwirlDouble>
        </Swirl>
      </Portal>
    </Wrapper>
  );
};

export default Loading;
