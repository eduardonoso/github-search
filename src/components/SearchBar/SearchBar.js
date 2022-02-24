import {useState} from 'react';
import Button from '../Button';
import styles from './SearchBar.module.scss';

const SearchBar = ({handleSearch, isLoading, placeHolder}) => {
  const [query, setQuery] = useState('');

  return <form className={styles.searchForm} onSubmit={(e) => handleSearch(query, 1, e)}>
    <input type='text'
           className={styles.searchInput}
           placeholder={placeHolder}
           onChange={e => setQuery(e.target.value)}
           value={query}/>
    <Button type='submit'
            isLoading={isLoading}
            className={styles.searchBtn}
            content={'Search'}/>
  </form>
}

export default SearchBar;
