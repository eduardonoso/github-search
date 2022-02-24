import styles from './Header.module.scss'

const Header = () => {
return <div className={styles.wrapper}>
  <h1 className={styles.title}>github search</h1>
  <h5 className={styles.subtitle}>by Eduardo Donoso</h5>
</div>
}

export default Header;
