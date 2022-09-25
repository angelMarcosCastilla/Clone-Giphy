import ItemSlider from '../IntemSlider'
import { ListSliderStyled } from './styled'

export default function ListSlider ({ gifs, height }) {
  return (
    <ListSliderStyled height={height}>
      {gifs.map((data) => (
        <ItemSlider key={data.id} img={data.images.original.url} title={data.title} />
      ))}
    </ListSliderStyled>
  )
}
