import styled from 'styled-components'

function SignupButton({ type, content, onClick }) {
    return <SignupButtonStyle type={type} onClick={onClick}>{content}</SignupButtonStyle>
}

const SignupButtonStyle = styled.button`
  background: linear-gradient(to right, #14163c 0%, #062c9e 70%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 30%;
  height: 3.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
  margin: 0 0 1rem 0;
`;

export default SignupButton