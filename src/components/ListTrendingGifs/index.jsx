import { useEffect, useState } from 'react'
import { getTrendingGifs } from '../../services/gifsService'
import ListSlider from '../ListSlider'
import Slider from '../Slider'
import iconTrending from '../../assets/images/trending.svg'

export default function ListTrendingGifs () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getTrendingGifs().then(setGifs)
  }, [])

  return (
    <Slider title='Trending' icon={iconTrending}>
      <ListSlider height='150px' gifs={gifs} />
    </Slider>
  )
}
