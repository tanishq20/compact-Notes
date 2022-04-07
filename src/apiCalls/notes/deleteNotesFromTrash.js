import { Toast } from '../../components'

export const deleteNotesFromTrash = (_id, notesDispatch) => {
  notesDispatch({ type: 'DELETE_NOTE_FROM_TRASH', payload: _id })
  Toast('Successfully deleted note from trash.', 'success')
}
