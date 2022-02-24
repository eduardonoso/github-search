import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import styles from './RepoList.module.scss';

/**
 *
 * @param item
 * @return {JSX.Element}
 * @constructor
 */
const RepoCard = ({item}) => {
  return <div className={styles.listItem}>
    <div className={styles.listRow}>
        <span className={styles.repoNameWrapper}>
          <a href={item.html_url}>{item.full_name}</a>
        </span>
      <span className={styles.starCount}>
          <FontAwesomeIcon icon={faStar} color={'gold'}/>{item.stargazers_count}
        </span>
    </div>
    <div className={styles.description}>
      {item.description}
    </div>
    <div className={styles.cardFooter}>
      <div>
        {item.language && <span className={styles.language}>{item.language}</span>}
      </div>
      <span className={styles.lastUpdated}>
          updated @ {new Date(item.pushed_at).toLocaleString()}
        </span>
    </div>
  </div>
}

export default RepoCard
