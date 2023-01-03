import { Link } from "react-router-dom"

const MainNavigation = () => (
  <header>
      <nav>
          <ul>
            <li><Link to='/meetups'>All meetups</Link></li>
            <li><Link to='/meetups/new'>New</Link></li>
            <li><Link to='/meetups/favorites'>Favorites</Link></li>
          </ul>
      </nav>
  </header>
)

export default MainNavigation
