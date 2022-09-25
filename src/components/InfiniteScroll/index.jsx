import { useEffect, useRef, useState } from 'react'
import { useSearchGifs } from '../../hooks/useSearchGifs'
import Img from './Img'
import { GridScroll } from './styled'

export default function InfiniteScroll ({ searchGifs }) {
  const { gifs, setNexTPage } = useSearchGifs({ query: searchGifs })
  const [isShow, setIsShow] = useState(false)
  const visorRef = useRef()

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '100px'
    })
    observer.observe(visorRef.current)
    return () => {
      // observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isShow) {
      setNexTPage(prev => prev + 1)
    }
  }, [isShow])
  return (
    <>
      <GridScroll>
        {gifs.map(gif => <Img key={gif.id} src={gif.images.downsized_medium.url} alt={gif.title} />)}
      </GridScroll>
      <div ref={visorRef} />
    </>
  )
}
