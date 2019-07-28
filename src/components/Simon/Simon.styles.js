import styled, { css } from 'styled-components';

const wrapperBackground = css`
  background: #b5bdc8;
  background: -moz-linear-gradient(
    -45deg,
    #b5bdc8 0%,
    #828c95 36%,
    #28343b 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #b5bdc8 0%,
    #828c95 36%,
    #28343b 100%
  );
  background: linear-gradient(135deg, #b5bdc8 0%, #828c95 36%, #28343b 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5bdc8', endColorstr='#28343b',GradientType=1 );
`;

export const Wrapper = styled.div`
  ${wrapperBackground}
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 800px;
  padding: 15px;
  margin: auto;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);
`;

export const Line = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
