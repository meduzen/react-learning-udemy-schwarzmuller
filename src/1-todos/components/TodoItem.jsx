import { useRef, useState } from 'react'
import Dialog from './Dialog'
import Card from '../../components/Card'
import Button from '../../components/Button'

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
        <Card>
            <h3>{task}</h3>
            <div className="todo__actions">
                <Button
                    type="button"
                    variant="secondary"
                    onClick={deleteHandler} disabled
                >
                    share
                </Button>
                <Button
                    type="button"
                    variant="secondary"
                    onClick={deleteHandler}
                >
                    delete
                </Button>
                <Button
                    type="button"
                    variant="primary"
                    onClick={doneHandler}
                >
                    done
                </Button>
            </div>
            <Dialog ref={$dialog} prompt={modalPrompt}/>
        </Card>
    </li>
  )
}

export default TodoItem
