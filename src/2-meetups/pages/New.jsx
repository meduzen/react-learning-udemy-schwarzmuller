import MeetupCreateForm from '../components/MeetupCreate'

const celebrateInTheConsole = () => { console.info('New meetup added') }

const NewMeetup = () => (
  <div>
      <MeetupCreateForm onCreate={celebrateInTheConsole}></MeetupCreateForm>
      <h3>New Meetup</h3>
  </div>
)

export default NewMeetup
