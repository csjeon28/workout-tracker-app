import styled from 'styled-components'

function SignupButton({ content }) {
    return <SignupButtonStyle>{content}</SignupButtonStyle>
}

const SignupButtonStyle = styled.button`
  background: linear-gradient(to right, #14163c 0%, #062c9e 70%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 30%;
  height: 2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
`;

export default SignupButton