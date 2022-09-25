import styled from 'styled-components'

export const GridStyled = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 2rem;
  `

export const ItemStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
  grid-row-end:  ${({ rowEnd }) => rowEnd || 0};
  grid-column-start: ${({ columStart }) => columStart || 0};
  grid-column-end:  ${({ columEnd }) => columEnd || 0};
  grid-row-start:  ${({ rowStart }) => rowStart || 0};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
