import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import MeetupsContext from '../store/meetups'

/**
 *
 * @param {HTMLFormElement} $form
 * @returns {Object}
 */
const formDataToObject = $form => Object.fromEntries(new FormData($form).entries())

const MeetupCreateForm = ({ onCreate }) => {
  const history = useHistory()
  const meetups = useContext(MeetupsContext)

  /**
   * @param {SubmitEvent} e
   */
  const submit = e => {
    e.preventDefault()

    fetch('example.tld/endpoint', {
      method: 'post',
      body: new FormData(e.target)
    })
      .finally(() => {
        meetups.add(formDataToObject(e.target))
        onCreate()
        history.replace('/meetups')
      })
  }

  return (
    <form method="post" onSubmit={submit}>
        <legend>Add a new meetup</legend>
        <label htmlFor="meetup-title">
            Name: <input type="text" id="meetup-title" name="title"/>
        </label>
        <label htmlFor="meetup-description">
            Description: <textarea id="meetup-description" name="description" cols="30" rows="5"></textarea>
        </label>
        <button>Create</button>
    </form>
  )
}

export default MeetupCreateForm
