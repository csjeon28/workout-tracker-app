import styled from 'styled-components'

function LoginPageBtn({ type, content, onClick }) {
  return <LoginPageBtnStyle type={type} onClick={onClick}>{content}</LoginPageBtnStyle>
}

const LoginPageBtnStyle = styled.button`
  background: linear-gradient(to right, #ffffff 0%, #ffe7d1 70%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 30%;
  height: 2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #2b3099;
  font-weight: bold;
  margin: 0.3rem 0 0 0;
`;

export default LoginPageBtn