import { useEffect, useState } from 'react'
import MeetupsList from '../components/MeetupsList'

import MEETUPS from '../data/all.json'

// Simulate remotely fetching meetups…
const simulateFetch = (setMeetups, setLoading) => setTimeout(() => {
  setMeetups(MEETUPS)
  setLoading(false)
  console.log('Meetups fetched!')
}, 2000)

const Meetups = () => {
  const [meetups, setMeetups] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    simulateFetch(setMeetups, setLoading)
  }, [])

  if (loading) {
    return (
      <div>
          <h3>Meetups</h3>
          <p>Loading…</p>
      </div>
    )
  }

  return (
    <div>
        <h3>Meetups</h3>
        <MeetupsList meetups={meetups}/>
    </div>
  )
}

export default Meetups
