import styled from 'styled-components'

export const GridScroll = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  & img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
`
