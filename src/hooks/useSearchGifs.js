import { useEffect, useState } from 'react'
import { getSearchGifs } from '../services/gifsService'

const INITIAL_STATE = 0

function useSearchGifs ({ query = 'random' }) {
  const [gifs, setGifs] = useState([])
  const [nextPage, setNexTPage] = useState(INITIAL_STATE)

  useEffect(() => {
    getSearchGifs({ query })
      .then(setGifs)
  }, [query])

  useEffect(() => {
    if (nextPage === INITIAL_STATE) return
    getSearchGifs({ query, page: nextPage })
      .then(data => setGifs(prevGifs => prevGifs.concat(data)))
  }, [nextPage])

  return { gifs, setNexTPage }
}

export { useSearchGifs }
