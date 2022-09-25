import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { NavbarStyled } from './styled'

const Navbar = () => {
  return (
    <Container>
      <NavbarStyled>
        <Link className='logo' to='/'> Clone Ghiphy</Link>
        <ul>
          <li> <Link to='/reactions'>Reactions</Link></li>
          <li><Link to='/entertainment'>Entertainment</Link></li>
          <li><Link to='/sports'>Sports</Link></li>
          <li><Link to='stickers'>stickers</Link></li>
          <li><Link to='artist'>Artist</Link></li>
        </ul>
        <div>
          <button>Upload</button>
          <button>create</button>
          <button>Log in</button>
        </div>
      </NavbarStyled>
    </Container>
  )
}

export default Navbar
