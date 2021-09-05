import styled from 'styled-components'

function EditBtn({ type, onClick, content }) {
    return <EditBtnStyle type={type} onClick={onClick}>{content}</EditBtnStyle>
}

const EditBtnStyle = styled.button`
  display: inline-block;
  padding: 0.2em 0.6em;
  margin: 0 0.1em 0.1em 0;
  border: 0.2em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;
  color: #2b3099;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.25);
  text-align: center;
  transition: all 0.1s;
  :hover {
    border-color: #c5b6d9;
  }
`;

export default EditBtn