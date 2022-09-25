import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../layout/Container'
import { ContainerSearch, InputStyled } from './styled'

export default function InputSearch () {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const hangleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    navigate(`/search/${input}`)
  }
  return (
    <Container>
      <ContainerSearch>
        <InputStyled type='text' placeholder='Search Gigfs' onChange={hangleChange} value={input} />
        <button onClick={handleSubmit}>🔍</button>
      </ContainerSearch>
    </Container>
  )
}
