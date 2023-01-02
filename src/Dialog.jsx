const Dialog = props => {
  return (
    <dialog {...props}>
        <form method="dialog">
            <legend>{props.prompt ?? 'Proceed?'}</legend>
            <button value="0">Cancel</button>
            <button value="1">Yes</button>
        </form>
    </dialog>
  )
}

export default Dialog
