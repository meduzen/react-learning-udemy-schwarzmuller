import styles from './index.module.css'

import MeetupItem from './MeetupItem'

const MeetupList = ({ meetups }) => (
  <ul meetups={meetups} class={styles.ul}>
    {meetups.map(meetup =>
      <li key={meetup.id}>
              <MeetupItem meetup={meetup}/>
      </li>
    )}
  </ul>
)

export default MeetupList
