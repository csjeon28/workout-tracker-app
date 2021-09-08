import styled from 'styled-components'

const WorkoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 7vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 4px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  color: #8a8294;
  font-size: 14px;
  text-shadow: 1px 1px 1px #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 0 0 0 1rem;
  @media only screen and (max-width: 320px) {
    width: 70vw;
    height: 10vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    height: 10vh;
    width: 70vw;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    height: 8vh;
    width: 70vw;
  }
  @media only screen and (min-width: 768px) {
    height: 8vh;
    width: 52vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 7vh;
    width: 40vw;
  }
  @media only screen and (min-width: 1280px) {
    height: 7vh;
    width: 30vw;
  }
`;

export default WorkoutContainer