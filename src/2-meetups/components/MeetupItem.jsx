const MeetupItem = ({ meetup }) => (
  <>
      <h4>{meetup.title}</h4>
      <p>{meetup.description}</p>
      <img src={meetup.image} width="600" height="auto" alt="" />
      <address>{meetup.address}</address>
      <button type="button">Add to favorites</button>
  </>
)

export default MeetupItem
