import styled from 'styled-components'

function SignupPageBtn({ type, content }) {
  return <SignupPageBtnStyle type={type}>{content}</SignupPageBtnStyle>
}

const SignupPageBtnStyle = styled.button`
  background: linear-gradient(to left, #14163c 0%, #062c9e 80%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 50%;
  height: 2.2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
  margin: 0.3rem 0 0 0;
`;

export default SignupPageBtn