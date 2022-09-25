import styled from 'styled-components'

export const NavbarStyled = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 0;

& .logo{
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
}
& ul {
  box-sizing: content-box;
  display: flex;
  list-style: none;
  gap: 10px;
  padding: 0;

}
& ul li {
}
& ul a{
  display: block;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  width: 100%;
  padding: .7rem 1rem;
  background-image: linear-gradient(to right, #3F5EFB, #FC466B); 
  background-image: -webkit-linear-gradient(to right, #3F5EFB, #FC466B); 
  background-size: 100% 4px;
  background-position: bottom;
  background-repeat: no-repeat;

}
& button {
  background-color: #6E65FF;
  padding: .7rem;
  color: white;
  border: none;
  gap: 10px;
  margin-left: 1rem;
}
& button:nth-child(3) {
  position: relative;
  padding: .7rem ;
  background-color: black;
  width: 100px;
  color: white;
  gap: 10px;
  text-align: right;
  color: white;
}

& button:nth-child(3)::before {
  content: '👤';
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 30px;
  background-color: grey;
  color: white;
  text-align: center;
  line-height: 39px;
}
`
