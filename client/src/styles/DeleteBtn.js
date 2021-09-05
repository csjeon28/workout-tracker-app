import styled from 'styled-components'

function DeleteBtn({ onClick, content }) {
    return <DeleteBtnStyle onClick={onClick}>{content}</DeleteBtnStyle>
}

const DeleteBtnStyle = styled.button`
  display: inline-block;
  padding: 0.2em 0.6em;
  margin: 0 0.1em 0.1em 0;
  color: #2b3099;
  border: 0.2em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  font-weight: 300;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  -webkit-transition: all 150ms linear;
  :hover {
    background: #c5b6d9;
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
    color: #2b3099;
    text-decoration: none;
    -webkit-transition: all 250ms linear;
            transition: all 250ms linear;
    }
`;

export default DeleteBtn