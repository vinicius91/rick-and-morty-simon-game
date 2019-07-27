import styled from 'styled-components';

export const RegularCharacter = styled.div`
  width: 30vw;
  min-height: 18vw;
  flex: 0 1 45%;
  margin: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px;
  border: ${props => `3px solid var(--ui-bkgd, ${props.color})`};

  @media (min-width: 250px) and (max-width: 480px) {
    flex-basis: 40%;
    margin: 7px;
    width: 25vw;
    height: 35vw;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-basis: 42%;
    margin: 8px;
    width: 25vw;
    height: 35vw;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    flex-basis: 42%;
    margin: 8px;
    width: 20vw;
    height: 33vw;
  }

  @media (min-width: 1001px) and (max-width: 1280px) {
    flex-basis: 44%;
    margin: 10px;
    width: 25vw;
    height: 25vw;
  }

  @media (min-width: 1281px) and (max-width: 1550px) {
    width: 25vw;
    height: 20vw;
  }

  background-image: ${props => `url(${props.img})`};
  box-shadow: ${props => `1px 0px ${props.colorDark}, 0px 1px ${props.color}, 2px 1px ${props.colorDark}, 1px 2px ${props.color},
    3px 2px ${props.colorDark}, 2px 3px ${props.color}, 4px 3px ${props.colorDark}, 3px 4px ${props.color},
    5px 4px ${props.colorDark}, 4px 5px ${props.color}, 6px 5px ${props.colorDark}, 5px 6px ${props.color}`};

  :hover {
    transform: translate(2px, 2px);
  }

  :active {
    transform: translate(4px, 4px);
    box-shadow: ${props => `0 0 5px #fff, 
    inset 0 0 5px #fff, 
    0 0 20px ${props.color},
    inset 0 0 20px ${props.color}`};
  }
`;

export const ActiveCharacter = styled(RegularCharacter)`
  box-shadow: ${props => `0 0 5px #fff, 
    inset 0 0 5px #fff, 
    0 0 20px ${props.color},
    inset 0 0 20px ${props.color}`};

  :hover {
    transform: translate(0px, 0px);
  }
`;
