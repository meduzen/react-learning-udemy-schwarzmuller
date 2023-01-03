import { Link } from 'react-router-dom'
import styles from  './navigation.module.css'

const MainNavigation = () => (
  <header>
      <nav>
          <ul className={styles.ul}>
            <li className={styles.li}><Link to='/meetups'>All meetups</Link></li>
            <li className={styles.li}><Link to='/meetups/new'>New</Link></li>
            <li className={styles.li}><Link to='/meetups/favorites'>Favorites</Link></li>
          </ul>
      </nav>
  </header>
)

export default MainNavigation
