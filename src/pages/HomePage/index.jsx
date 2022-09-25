import Container from '../../layout/Container'
import ListTrendingGifs from '../../components/ListTrendingGifs'
import ListArtistGifs from '../../components/ListArtistGifs'
import GridGifs from '../../components/GridClips'
import InfiniteScroll from '../../components/InfiniteScroll'
import iconStories from '../../assets/images/stories.svg'

export default function HomePage () {
  return (
    <Container>
      <ListTrendingGifs />
      <ListArtistGifs />
      <GridGifs />
      <br /> {/* no hacer estos por tu bien */}
      <br />
      <br />
      <br />
      <h2 style={{ marginBottom: '2rem' }}>
        <img
          src={iconStories}
          style={{ marginRight: '1rem' }}
          alt='icon stories'
          aria-label='img'
          role='icon'
        />
        Stories
      </h2>
      <InfiniteScroll />
    </Container>
  )
}
