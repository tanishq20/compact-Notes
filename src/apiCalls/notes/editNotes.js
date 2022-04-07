import axios from 'axios'
import { Toast } from '../../components'

export const editNotes = async (note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      { note },
      {
        headers: { authorization: localStorage.getItem('encodedToken') },
      }
    )
    if (response.status === 201) {
      notesDispatch({ type: 'EDIT_NOTE', payload: response.data.notes })
      Toast('Successfully edited note.', 'success')
    }
  } catch (error) {
    Toast('Oops.. something went wrong. Try again later', 'error')
  }
}
