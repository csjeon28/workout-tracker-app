import styled from 'styled-components'

function NewInput({ type, onChange, name }) {
    return <NewInputStyle type={type} onChange={onChange} name={name} />
}

const NewInputStyle = styled.input`
  background: rgba(255, 255, 255, 0.24);
  box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.5rem;
  width: 37%;
  height: 1rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 0.8rem;
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

export default NewInput