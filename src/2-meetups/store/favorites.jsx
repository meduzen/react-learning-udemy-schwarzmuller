import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  count: 0,

  add: meetup => {},
  remove: meetup => {},
  has: meetup => {},
  toggle: meetup => {},
})

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const add = meetup => setFavorites(favorites => favorites.concat(meetup))

  const remove = meetup => setFavorites(favorites => favorites.filter(({ id }) => meetup.id != id))

  const has = meetup => favorites.some(({ id }) => meetup.id == id)

  const toggle = meetup => has(meetup) ? remove(meetup) : add(meetup)

  const context = {
    favorites,
    count: favorites.length,
    add,
    remove,
    has,
    toggle,
  }

  return <FavoritesContext.Provider value={context}>
    {children}
  </FavoritesContext.Provider>
}

export default FavoritesContext
export { FavoritesContextProvider}
