import { useContext } from 'react'
import FavoritesContext from '../store/favorites'

const MeetupItem = ({ meetup }) => {
  const favorites = useContext(FavoritesContext)

  const btnActionLabel = favorites.has(meetup) ? 'Remove from' : 'Add to'

  return (
  <>
      <h4>{meetup.title}</h4>
      <p>{meetup.description}</p>
      <img src={meetup.image} width="600" height="auto" alt="" />
      <address>{meetup.address}</address>
      <button type="button" onClick={() => favorites.toggle(meetup)}>
          {btnActionLabel} favorites
      </button>
  </>
)}

export default MeetupItem
