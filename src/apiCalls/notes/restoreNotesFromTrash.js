import { addNewNotes } from './addNewNotes'
import { deleteNotesFromTrash } from './deleteNotesFromTrash'

export const restoreNotesFromTrash = (noteDetails, notesDispatch) => {
  addNewNotes(noteDetails, notesDispatch)
  deleteNotesFromTrash(noteDetails._id, notesDispatch)
}
