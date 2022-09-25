import styled from 'styled-components'

export const ListSliderStyled = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  height: ${props => props.height || '140px'};
  gap: 5px;
  scroll-snap-type: x mandatory;
  overflow-X: scroll;
  overflow-y: hidden;
`
