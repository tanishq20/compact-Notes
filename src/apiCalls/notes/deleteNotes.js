import axios from 'axios'
import { Toast } from '../../components'

export const deleteNotes = async (note, notesDisptach) => {
  try {
    const response = await axios.delete(`/api/notes/${note._id}`, {
      headers: { authorization: localStorage.getItem('encodedToken') },
    })
    if (response.status === 200) {
      notesDisptach({ type: 'DELETE_NOTE', payload: response.data.notes })
      notesDisptach({ type: 'TRASHED_NOTE', payload: note })
      Toast('Successfully deleted note.', 'success')
    }
  } catch (error) {
    Toast('Oops.. something went wrong. Try again later', 'error')
  }
}
