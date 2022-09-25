import styled from 'styled-components'

export const ContainerSearch = styled.div`
position: relative;
`
export const InputStyled = styled.input`
  display: block;
  width: 100%;
  padding: 15px 2rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  
  & + button {
    position: absolute;
    top: 0;
    background: #f953c6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #b91d73, #f953c6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #b91d73, #f953c6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    right: 0;
    width: 50px;
    height: 100%;
    font-size: 1.5rem;
    border: none;

  }
  &::placeholder{
    color: grey;
  }
  margin-bottom: 2rem;
`
