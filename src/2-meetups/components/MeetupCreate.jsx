const MeetupCreateForm = ({ onCreate }) => {

  /**
   *
   * @param {SubmitEvent} e
   */
  const submit = e => {
    e.preventDefault()

    fetch('example.tld/endpoint', {
      method: 'post',
      body: new FormData(e.target)
    })
  }

  return (
    <form method="post" onSubmit={submit}>
        <legend>Add a new meetup</legend>
        <label htmlFor="meetup-name">
            Name: <input type="text" id="meetup-name" name="name"/>
        </label>
        <label htmlFor="meetup-name">
            Description: <textarea name="desc" id="meetiup-desc" cols="30" rows="5"></textarea>
        </label>
        <button>Create</button>
    </form>
  )
}

export default MeetupCreateForm
