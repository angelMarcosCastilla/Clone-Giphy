import React, { useState, useEffect } from 'react'
import Slider from '../Slider'
import { GridStyled, ItemStyled } from './styled'
import clipsIcon from '../../assets/images/clips.svg'
import { getSearchGifs } from '../../services/gifsService'

export default function GridGifs () {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getSearchGifs({ query: 'peru' }).then(setGifs)
  }, [])

  return (
    <Slider title='Clips' icon={clipsIcon}>
      <GridStyled>
        <ItemStyled columStart={1} columEnd={2} rowStart={1} rowEnd={3}>
          <img src={gifs[0]?.images.original.url} alt='icon' />
        </ItemStyled>
        <ItemStyled columStart={2}>
          <img src={gifs[1]?.images.original.url} alt='icon 2' />
        </ItemStyled>
        <ItemStyled columStart={2}>
          <img src={gifs[2]?.images.original.url} alt='icon 2' />
        </ItemStyled>
      </GridStyled>
    </Slider>
  )
}
