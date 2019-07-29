import styled, { keyframes } from 'styled-components';

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
  display: block;
  position: relative;
  width: 200px;
  height: 200px;
`;

export const Item = styled.div`
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50px;
  left: 50px;
  :before,
  :after {
    display: block;
    position: absolute;
    content: '';
  }

  :before {
    width: 50px;
    height: 50px;
  }

  :after {
    background-color: rgba(0, 0, 0, 0)
    width: 25px;
    height: 25px;
    z-index: 1;
  }
`;

export const TopLeft = styled(Item)`
  animation: ${tl} 3.5s ease infinite;

  :before {
    background: #fbbc05;
    top: 0;
    left: 0;
    border-radius: 100% 0 0 0;
  }

  :after {
    top: 25px;
    left: 25px;
    border-radius: 100% 0 0 0;
  }
`;

export const TopRight = styled(Item)`
  animation: ${tr} 3.5s ease infinite;

  :before {
    background: #ea4335;
    top: 0;
    right: 0;
    border-radius: 0 100% 0 0;
  }

  :after {
    top: 25px;
    right: 25px;
    border-radius: 0 100% 0 0;
  }
`;

export const BottomLeft = styled(Item)`
  animation: ${bl} 3.5s ease infinite;

  :before {
    background: #34a853;
    bottom: 0;
    left: 0;
    border-radius: 0 0 0 100%;
  }

  :after {
    bottom: 25px;
    left: 25px;
    border-radius: 0 0 0 100%;
  }
`;

export const BottomRight = styled(Item)`
  animation: ${br} 3.5s ease infinite;

  :before {
    background: #4285f4;
    bottom: 0;
    right: 0;
    border-radius: 0 0 100% 0;
  }

  :after {
    bottom: 25px;
    right: 25px;
    border-radius: 0 0 100% 0;
  }
`;
