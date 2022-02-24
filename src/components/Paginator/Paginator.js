import Button from '../Button';
import styles from './Paginator.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';

const Paginator = ({page, setPage, totalCount, perPage, isLoading}) => {
  const totalPages = Math.ceil(totalCount / perPage);
  const PageButtons = () => {
    const pages = [];
    for (let targetPage = Math.max(1, page - 2); targetPage <= Math.min(totalPages, Math.max(page + 2, 5)); targetPage++) {
      if (targetPage <= totalPages) {
        pages.push(<Button type='button'
                           key={targetPage}
                           onClick={() => setPage(targetPage)}
                           className={page === targetPage ? styles.highlight : ''}
                           isLoading={isLoading && page === targetPage}
                           content={targetPage}/>
        )
      }
    }
    return pages;
  }

  return <div className={styles.wrapper}>
    <Button type='button' onClick={() => setPage(--page)} disabled={page <= 1}
            content={<FontAwesomeIcon icon={faCaretLeft}/>}/>
    <PageButtons/>
    <Button type='button' onClick={() => setPage(++page)} disabled={page >= totalPages}
            content={<FontAwesomeIcon icon={faCaretRight}/>}/>
  </div>
}

export default Paginator;
