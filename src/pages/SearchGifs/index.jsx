import { useParams } from 'react-router-dom'
import InfiniteScroll from '../../components/InfiniteScroll'
import Container from '../../layout/Container'
import { Label } from './styled'

export default function SearchGifs () {
  const { gifs: searchGifs } = useParams()

  return (
    <Container>
      <section>
        <Label>{searchGifs}</Label>
      </section>
      <InfiniteScroll searchGifs={searchGifs} />
    </Container>
  )
}
