import { useRef } from 'react'

const MeetupCreateForm = () => {
  const $title = useRef()
  const $description = useRef()

  /**
   *
   * @param {SubmitEvent} e
   */
  const submit = e => {
    e.preventDefault()

    const title = $title.current.value
    const description = $description.current.value
  }

  return (
    <form method="post" onSubmit={submit}>
        <legend>Add a new meetup</legend>
        <label htmlFor="meetup-name">
            Name: <input type="text" id="meetup-name" name="meetup-name" ref={$title} />
        </label>
        <label htmlFor="meetup-name">
            Description: <textarea name="meetup-desc" id="meetiup-desc" cols="30" rows="5"  ref={$description}></textarea>
        </label>
        <button>Create</button>
    </form>
  )
}

export default MeetupCreateForm
