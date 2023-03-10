import { forwardRef, useImperativeHandle, useRef } from 'react'
import { onceEvent } from '../utils/events'

/**
 * Use native HTML `<dialog>` (https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement) to benefit from its show/hide mechanisms, backdrop, focus trap…
 */
const Dialog = forwardRef((props, ref) => {

  // DOM refs

  const $dialog = useRef(null)

  // functions

  // Expose this custom `showModal()` below to the parent component.
  useImperativeHandle(ref, () => ({

    showModal(confirmCallback = undefined, closeCallback = undefined) {
      $dialog.current.showModal()

      $dialog.current.addEventListener('close', e => {
        const approve = !!Number(e.target.returnValue)
        if (approve && confirmCallback) {
          confirmCallback() // success
        }

        if (closeCallback) {
          closeCallback() // always run on close
        }
      }, onceEvent)

      $dialog.current.addEventListener('cancel', closeCallback, onceEvent)
    }
  }))

  return (
    <dialog {...props} ref={$dialog}>
        <form method="dialog">
            <legend dangerouslySetInnerHTML={{ __html: props.prompt ?? 'Proceed?'}}></legend>
            {props.cancel && <button value="0">{props.cancel}</button>}
            <button value="1">{props.confirm}</button>
        </form>
    </dialog>
  )
})

export default Dialog
