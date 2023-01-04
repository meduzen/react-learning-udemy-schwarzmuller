import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../store/favorites'

import styles from  './navigation.module.css'

const MainNavigation = () => {
  const favorites = useContext(FavoritesContext)

  return (
    <header>
        <nav>
            <ul className={styles.ul}>
              <li className={styles.li}><Link to='/meetups'>All meetups</Link></li>
              <li className={styles.li}><Link to='/meetups/new'>New</Link></li>
              <li className={styles.li}><Link to='/meetups/favorites'>Favorites ({favorites.count})</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
