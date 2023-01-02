import { useState } from 'react'
import Dialog from './Dialog'

/**
 * @type {EventListenerOptions}
 */
const onceEvent = { once: true }

const TodoItem = ({ task }) => {
  const id = `dialog-${(Math.random() * 100000000000).toFixed(0)}`

  const [modalOpen, setmodalOpen] = useState(false)
  const [modalPrompt, setmodalPrompt] = useState('')

  function showModal(prompt, callback) {
    const $modal = document.getElementById(id)
    setmodalPrompt(prompt)

    $modal.showModal()
    setmodalOpen(true)

    $modal.addEventListener('close', e => {
      setmodalOpen(false)
      const approve = !!Number(e.target.returnValue)
      if (approve) {
        callback()
      }
    }, onceEvent)

    $modal.addEventListener('cancel', () => setmodalOpen(false), onceEvent)
  }

  const remove = () => {
    showModal(`Delete task: ${task}`, () => {
      console.log('should remove here')
    })
  }

  const done = () => {
    showModal(`Mark task as completed: <em>${task}</em>`, () => {
      console.log('should mark as complete here')
    })
  }

  return (
    <li className={`
      todo
      ${modalOpen && 'todo--modal-visible'}
    `}>
        <h2>{task}</h2>
        <div className="todo__actions">
            <button type="button" onClick={remove}>delete</button>
            <button type="button" onClick={done}>done</button>
        </div>
        <Dialog id={id} prompt={modalPrompt}/>
    </li>
  )
}

export default TodoItem
