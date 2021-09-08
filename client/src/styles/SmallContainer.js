import styled from 'styled-components'

const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 8.5vh;
  width: 34vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 30px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 5px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 0 0 0 2rem;
    @media only screen and (max-width: 320px) {
    width: 90vw;
    height: 14vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    height: 12vh;
    width: 70vw;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    height: 11vh;
    width: 84vw;
  }
  @media only screen and (min-width: 768px) {
    height: 10vh;
    width: 58vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 8.5vh;
    width: 44vw;
  }
  @media only screen and (min-width: 1280px) {
    height: 8.5vh;
    width: 34vw;
  }
`;

export default SmallContainer