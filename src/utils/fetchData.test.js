import '@testing-library/jest-dom'
import fetchData from './fetchData';

describe('fetchData implementation', () => {
  test('uses correct uri', async () => {
    const mockFetch = jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({})
    }));
    await fetchData('https://google.com', {})
    expect(mockFetch).toHaveBeenCalledWith('https://google.com', {})
  })

  test('handles errors', async () => {
    const mockFetch = jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 403,
      headers: {
        get: () => 99999
      },
      json: () => Promise.resolve({})
    }));

    await expect(fetchData('https://google.com', {})).rejects.toThrow()
  })
})

