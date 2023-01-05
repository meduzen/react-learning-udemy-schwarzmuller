import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../store/favorites'

import MeetupsList from '../components/MeetupsList'

const Favorites = () => {
  const favorites = useContext(FavoritesContext)

  // display texts

  const countDisplay = favorites.count > 1 ? favorites.count : ''
  const pluralizeMeetup = `meetup${favorites.count != 1 ? 's': ''}`

  return (
    <div>
      {favorites.count
        ? (
          <h3>Your {countDisplay} favorite {pluralizeMeetup}</h3> &&
          <MeetupsList meetups={favorites.favorites}/>
        )
        : (<h3>You have no favorite meetup, yet. <Link to="/meetups">Go pick some</Link>!</h3>)
      }
    </div>
  )
}

export default Favorites
