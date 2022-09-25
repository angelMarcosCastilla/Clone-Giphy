import { ImageStyled, ListItemStyle } from './styled'

export default function ItemSlider ({ img, title }) {
  return (
    <ListItemStyle>
      <ImageStyled src={img} alt={`imagen ${title}`} />
    </ListItemStyle>
  )
}
