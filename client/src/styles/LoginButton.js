import styled from 'styled-components'

function LoginButton({ type, content }) {
  return <LoginButtonStyle type={type}>{content}</LoginButtonStyle>
}

const LoginButtonStyle = styled.button`
  background: linear-gradient(to left, #14163c 0%, #062c9e 70%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
`;

export default LoginButton