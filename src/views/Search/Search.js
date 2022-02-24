import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList/RepoList';
import {useEffect, useState} from 'react';
import fetchData from '../../utils/fetchData';
import styles from './Search.module.scss'

const Search = () => {
  const [userData, setUserData] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const perPage = 30;

  useEffect(() => {
    handleSearch(query, page);
  }, [page])

  useEffect(() => {
    setPage(1)
  }, [query])

  const handleSearch = (query, page, event) => {
    if (event) event.preventDefault();
    if (query === '') return setUserData([])
    setIsLoading(true);
    setQuery(query);
    fetchData(`https://api.github.com/search/repositories?q=user:${query}&page=${page}&per_page=${perPage}`)
    .then(res => setUserData(res))
    .catch(e => setError(e))
    .finally(() => setIsLoading(false));
  }

  return <div className={styles.wrapper}>
    <SearchBar handleSearch={handleSearch} isLoading={isLoading} placeHolder={'Search github repos by user'}/>
    {error ? <div className={styles.error}>{error.message}</div> : <RepoList data={userData}
                                                                             page={page}
                                                                             setPage={setPage}
                                                                             perPage={perPage}
                                                                             isLoading={isLoading}/>
    }
  </div>
}

export default Search
