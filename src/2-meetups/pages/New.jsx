import MeetupCreateForm from '../components/MeetupCreate'

const celebrateInTheConsole = () => { console.info('New meetup added') }

const NewMeetup = () => (
  <div>
      <h3>New Meetup</h3>
      <p>Be inclusive and give enough precision to increase the chance of the meetup to be awesome!</p>
      <MeetupCreateForm onCreate={celebrateInTheConsole}></MeetupCreateForm>
  </div>
)

export default NewMeetup
