import Paginator from '../Paginator/Paginator';
import RepoCard from './RepoCard';
import styles from './RepoList.module.scss';

/**
 *
 * @param data
 * @param page
 * @param setPage
 * @param perPage
 * @param isLoading
 * @return {JSX.Element}
 * @constructor
 */
const RepoList = ({data, page, setPage, perPage, isLoading}) => {

  return <div className={styles.listWrapper}>

    {data?.items?.length === 0 && <div>No results found</div>}

    {data.items && <div className={styles.totalCount}>Found {data.total_count} results</div>}
    {data.items && data.items.map(item => <RepoCard key={item.id} item={item}/>)}
    {data.items && <Paginator page={page}
                              setPage={setPage}
                              totalCount={data.total_count}
                              perPage={perPage}
                              isLoading={isLoading}/>}

  </div>
}
/**
 * html_url
 * stargazers_count
 */
export default RepoList
