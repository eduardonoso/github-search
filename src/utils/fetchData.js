const fetchData = async (url, options) => {

  const res = await fetch(url, options);

  if (![200, 201].includes(res.status)) {
    if (res.status === 403) {
      const refreshTime = res.headers.get('x-ratelimit-reset');
      throw Error(`Rate limit reached, try again after ${new Date(refreshTime * 1000).toLocaleTimeString()}`)
    } else {
      throw Error(`Failed to retrieve data, try again later | ${res.status} ${res.statusText}`)
    }
  }

  return await res.json()
}

export default fetchData
