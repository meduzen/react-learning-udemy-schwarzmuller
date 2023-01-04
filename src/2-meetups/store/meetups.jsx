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

  add: meetup => {},
})

const MeetupsContextProvider = ({ children }) => {
  const [meetups, setMeetups] = useState([])

  const add = meetup => setMeetups(meetups => meetups.concat({
    ...meetup,
    id: (Math.random() * 123456789).toFixed(0),
    image: 'https://source.unsplash.com/random/700×700',
    address: '123 Street P-XYZ-987 Somewhere',
  }))

  const context = {
    meetups,
    count: meetups.length,
    add,
  }

  // Simulate remotely fetching meetups…
  useEffect(() => simulateFetch(setMeetups), [])

  return <MeetupsContext.Provider value={context}>
    {children}
  </MeetupsContext.Provider>
}

export default MeetupsContext
export { MeetupsContextProvider}
