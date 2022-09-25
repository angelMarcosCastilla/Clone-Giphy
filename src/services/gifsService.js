import { Api } from './api'

const BASE_URL = 'https://api.giphy.com/v1/gifs'
const LIMIT = 16
const DEFAULT_PARAMS = {
  api_key: 'ifx0rBfyD82Y3xhOCObg377IBeKrv1fC',
  limit: LIMIT
}
/**
 *
 * @returns return gifs trending - 15 results
 */
const getTrendingGifs = async () => {
  try {
    const res = await Api(`${BASE_URL}/trending`, { params: DEFAULT_PARAMS })
    const data = await res.data
    return data
  } catch (error) {
    console.log(error)
  }
}

/**
 * we i can finf
 *
 */
const getSearchGifs = async ({ query, page = 0 }) => {
  try {
    let resultsGifs = []
    if (Array.isArray(query)) {
      const result = await Promise.all(
        query.map(async (artis) => {
          const res = await Api(`${BASE_URL}/search`, { params: { ...DEFAULT_PARAMS, q: artis, limit: 2 } })
          const data = await res.data
          return data
        })
      )
      resultsGifs = result.flat()
    } else {
      const res = await Api(`${BASE_URL}/search`, { params: { ...DEFAULT_PARAMS, q: query, offset: LIMIT * page } })
      resultsGifs = await res.data
    }
    return resultsGifs
  } catch (error) {
    console.log(error)
  }
}

export { getTrendingGifs, getSearchGifs }

/* const giphyArtists = [
  "Grande+Dame",
  "Dylan+Morang",
  "Toke",
  "Pusheen",
  "TRIPPIESTEFF",
*/
