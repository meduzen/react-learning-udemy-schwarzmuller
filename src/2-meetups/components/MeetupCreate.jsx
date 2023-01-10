import { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import Dialog from '../../components/Dialog'

import { getFormData } from '../../utils/formData'
import MeetupsContext from '../store/meetups'

const MeetupCreateForm = ({ onCreate }) => {
  const history = useHistory()
  const meetups = useContext(MeetupsContext)

  const $dialog = useRef(null)

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
        const meetup = getFormData(e.target)

        if (!meetup.title || !meetup.description) {
          return $dialog.current.showModal()
        }

        meetups.add(meetup)
        onCreate()
        history.replace('/meetups')
      })
  }

  return (
    <>
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
    <Dialog ref={$dialog} prompt="Missing meetup informations" confirm="Close"/>
    </>
  )
}

export default MeetupCreateForm
