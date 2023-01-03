import styles from './index.module.css'

import Card from '../../components/Card'
import MeetupItem from './MeetupItem'

const MeetupList = ({ meetups }) => (
  <ul meetups={meetups} className={styles.ul}>
    {meetups.map(meetup =>
      <li key={meetup.id}>
          <Card>
              <MeetupItem meetup={meetup}/>
          </Card>
      </li>
    )}
  </ul>
)

export default MeetupList
