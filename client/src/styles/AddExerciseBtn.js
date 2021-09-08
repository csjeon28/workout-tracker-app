import styled from 'styled-components'

function AddExerciseBtn({ type, content }) {
  return <AddExerciseBtnStyle type={type}>{content}</AddExerciseBtnStyle>
}

const AddExerciseBtnStyle = styled.button`
  background: linear-gradient(to right, #ffffff 0%, #ffe7d1 70%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 45%;
  height: 2.1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #2b3099;
  font-weight: bold;
  margin: 0.5rem 0 0 4.4rem;
`;

export default AddExerciseBtn