import { createContext, useEffect, useState } from 'react'
import MEETUPS from '../data/all.json'

// Simulate remotely fetching meetups…
let fetching = false
const simulateFetch = (setMeetups) => {
  if (fetching) { return }

  fetching = true

  setTimeout(() => {
    setMeetups(MEETUPS)
    fetching = false
    console.info('Meetups (fakely) fetched!')
  }, 2000)
}

const MeetupsContext = createContext({
  meetups: [],
  count: 0,

})

const MeetupsContextProvider = ({ children }) => {
  const [meetups, setMeetups] = useState([])

  const context = {
    meetups,
    count: meetups.length,
  }

  // Simulate remotely fetching meetups…
  useEffect(() => simulateFetch(setMeetups), [])

  return <MeetupsContext.Provider value={context}>
    {children}
  </MeetupsContext.Provider>
}

export default MeetupsContext
export { MeetupsContextProvider}
