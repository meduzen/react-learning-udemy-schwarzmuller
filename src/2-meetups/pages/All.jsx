import { useContext, useState } from 'react'
import MeetupsContext from '../store/meetups'

import MeetupsList from '../components/MeetupsList'

const Meetups = () => {
  const meetups = useContext(MeetupsContext)

  const [loading, setLoading] = useState(!meetups.count)

  // Simulate waiting remote fetch from Meetups context
  if (!meetups.count) {
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div>
        <h3>Meetups</h3>
        {loading
          ? <p>Loading…</p>
          : <MeetupsList meetups={meetups.meetups}/>
        }
    </div>
  )
}

export default Meetups
