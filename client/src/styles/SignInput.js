import styled from 'styled-components'

function SignInput({ type, onChange, name }) {
    return <SignInputStyle type={type} onChange={onChange} name={name} />
}

const SignInputStyle = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 70%;
  height: 2.2rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 0.9rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #8773bf;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export default SignInput