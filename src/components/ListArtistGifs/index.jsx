import { useEffect, useState } from 'react'
import ListSlider from '../ListSlider'
import Slider from '../Slider'
import iconTrending from '../../assets/images/artist.svg'
import { getSearchGifs } from '../../services/gifsService'
import { giphyArtists } from '../../utils/artistData'

export default function ListArtistGifs () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getSearchGifs({ query: giphyArtists }).then(setGifs)
  }, [])

  return (
    <Slider title='Artist' icon={iconTrending}>
      <ListSlider height='250px' gifs={gifs} />
    </Slider>
  )
}
