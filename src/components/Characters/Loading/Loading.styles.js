import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  
  0% {
    transform: rotate(90deg);
    color:#fff;
  }
  
  50% {
    color:green;
  }
  
  100% {
    transform: rotate(180deg);
    color:#fff;
  } 
`;
export const rotate2 = keyframes`
  
  0% {
    transform: rotate(0deg);
    color:#fff;
  }
  
  100% {
    transform: rotate(360deg);
    color:#fff;
  }
  
`;

export const wobble = keyframes`
  
  0% {
    width: 202px;
    height: 198px;
    margin: -98px 0 0 -102px;
    box-shadow: 0 0 10px lime;
  }
  
  50% {
    width: 198px;
    height: 202px;
    margin: -102px 0 0 -98px;
    box-shadow: 0 0 15px lime;
  }
  
  100% {
    width: 202px;
    height: 198px;
    margin: -98px 0 0 -102px;
    box-shadow: 0 0 10px lime;
  }
  
`;

export const tl = keyframes`
    0%,96%,100%{transform:rotate(0deg)}
    12%{transform:rotate(-45deg)}
    24%{transform:rotate(-90deg)}
    36%{transform:rotate(-135deg)}
    48%{left:50px;transform:rotate(-180deg)}
    60%{left:125px;opacity:1;transform:rotate(-135deg)}
    61%,95%{opacity:0}
`;

export const tr = keyframes`
	0%{transform:rotate(0deg)}
	12%{transform:rotate(-45deg)}
	24%{transform:rotate(-90deg)}
	36%{transform:rotate(-135deg)}
	48%{transform:rotate(-180deg)}
	60%{transform:rotate(-225deg)}
	72%{transform:rotate(-270deg)}
	84%{transform:rotate(-315deg)}
	96%,100%{transform:rotate(-360deg)}
`;

export const bl = keyframes`
	0%,100%{transform:rotate(0deg)}
	12%{transform:rotate(-45deg)}
	24%{left:50px;transform:rotate(-90deg)}
	36%{left:125px;opacity:1;transform:rotate(-45deg)}
	37%,83%{opacity:0}
	84%{left:-25px;opacity:1;transform:rotate(-45deg)}
	96%{left:50px;transform:rotate(0deg)}
`;

export const br = keyframes`
	0%,96%,100%{transform:rotate(0deg)}
	12%{left:125px;opacity:1;transform:rotate(45deg)}
	13%,59%{opacity:0}
	60%{left:-25px;opacity:1;transform:rotate(45deg)}
	72%{left:50px;transform:rotate(90deg)}
	84%{transform:rotate(45deg)}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 300px;
`;

export const Portal = styled.div`
  display: block;
  position: relative;
  left: 9%;
  top: 15%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: 50%;
  border: 1px solid lime;
  box-shadow: inset 0 0 60px yellow;
  overflow: visible;
  background-color: lime;
  animation: ${wobble} 1s infinite linear;

  @media (max-width: 480px) {
    left: 15%;
  }
`;

export const Swirl = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  width: 80%;
  height: 80%;
  z-index: 4;
  border-radius: 50%;
  margin: 0% 0 0 0%;
  border: 0;
  box-shadow: inset -20px -22px 3px lime;
  animation: ${rotate} 15s infinite linear;
  background-color: #0a0;
  padding: 2px;
  content: '.';
  color: #fff;
  font-size: 20px;

  :after {
    position: absolute;
    content: '.   .';
    font-size: 2.5em;
    display: inline-block;
    margin-top: -40px;
    color: green;
  }

  :before {
    content: '.  .';
    font-size: 2em;
    display: inline-block;
    margin-top: -40px;
    color: white;
  }
`;

export const SwirlDouble = styled(Swirl)`
  animation-delay: 0.83s;
  box-shadow: inset -110px -110px 0 lime;
  border-color: green;
`;

export const SwirlTriple = styled(Swirl)`
  animation-delay: 0.33s;
  box-shadow: inset -110px -110px 0 lime;
`;

export const SwirlSpecial = styled(Swirl)`
  animation-delay: 0.33s;
  box-shadow: inset -20px -20px 0 lime;
`;

export const SwirlSpan = styled.span`
  background-color: #0a0;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: 20;
  transform: rotate(45deg);
`;

export const SwirlSpanOne = styled(SwirlSpan)`
  top: 70%;
  left: 40%;
  width: 45%;
  height: 15%;
  animation: ${rotate} 5s infinite linear;
`;

export const SwirlSpanTwo = styled(SwirlSpan)`
  top: 30%;
  left: 50%;
  width: 5%;
  height: 10%;
  animation: ${rotate2} 5s infinite linear;
`;

export const SwirlSpanThree = styled(SwirlSpan)`
  top: 40%;
  left: 75%;
  width: 15%;
  height: 10%;
  animation: ${rotate} 5s infinite linear;
`;

export const Swish = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  border: 1px solid #fff;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset 0 0 100px lime, 0 0 2px lime;
  z-index: 10;
  animation: ${rotate2} 15s infinite linear;
`;

export const SwishSpan = styled.span`
  position: absolute;
  display: block;
  width: 4%;
  height: 4%;
  background: #fff;
  border-radius: 50%;
`;

export const SwishSpanOne = styled(SwishSpan)`
  top: 10%;
  left: 50%;
`;

export const SwishSpanTwo = styled(SwishSpan)`
  top: 90%;
  left: 30%;
`;

export const SwishSpanThree = styled(SwishSpan)`
  top: 20%;
  left: 20%;
`;

export const SwishSpanFour = styled(SwishSpan)`
  top: 40%;
  left: 22%;
  width: 8x;
  height: 8x;
`;
