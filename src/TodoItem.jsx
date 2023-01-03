import { useRef, useState } from 'react'
import Dialog from './Dialog'

const TodoItem = ({ task }) => {

  // state

  const [modalPrompt, setModalPrompt] = useState('')

  // DOM refs

  const $dialog = useRef(null)

  // functions

  function showModal(prompt, confirmCallback) {
    setModalPrompt(prompt)
    $dialog.current.showModal(confirmCallback)
  }

  const deleteHandler = () => {
    showModal(`Delete task: ${task}`, deleteTask)
  }

  const doneHandler = () => {
    showModal(`Mark task as completed: <em>${task}</em>`, markAsDone)
  }

  const deleteTask = () => {
    console.log(`should remove: ${task}`)
  }

  const markAsDone = () => {
    console.log(`should mark as done: ${task}`)
  }

  return (
    <li className="todo">
        <h2>{task}</h2>
        <div className="todo__actions">
            <button type="button" onClick={deleteHandler}>delete</button>
            <button type="button" onClick={doneHandler}>done</button>
        </div>
        <Dialog ref={$dialog} prompt={modalPrompt}/>
    </li>
  )
}

export default TodoItem
