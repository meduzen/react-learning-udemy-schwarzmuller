/**
 * This component is only for learning Portal purpose. Don’t do this. If you
 * need to change the document `<title>`, use `document.title = 'title'`.
 */

import { createPortal } from 'react-dom';

const DocTitle = ({ children }) => createPortal(
  <>{children}</>, document.getElementById('document-title')
)

export default DocTitle
