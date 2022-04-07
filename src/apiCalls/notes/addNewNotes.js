import axios from 'axios'
import { Toast } from '../../components'

export const addNewNotes = async (note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes`,
      { note },
      {
        headers: { authorization: localStorage.getItem('encodedToken') },
      }
    )
    console.log(response)
    if (response.status === 201) {
      Toast('Successfully added new note.', 'success')
      notesDispatch({ type: 'ADD_NEW_NOTE', payload: response.data.notes })
    }
  } catch (error) {
    Toast('Oops.. something went wrong. Try again later', 'error')
  }
}
