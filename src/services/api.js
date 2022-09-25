async function Api (url, config) {
  const BASE_URL = new URL(url)
  const { params, ...configFetch } = config

  if (params) {
    Object.keys(params).forEach(key => BASE_URL.searchParams.append(key, params[key]))
  }

  try {
    const res = await fetch(BASE_URL, configFetch)
    const data = await res.json()
    return data
  } catch (err) {
    return console.log(err)
  }
}

export { Api }
