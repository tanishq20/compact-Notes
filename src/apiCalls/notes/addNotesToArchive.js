import axios from 'axios'
import { Toast } from '../../components'

export const addNotesToArchive = async (note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note },
      {
        headers: { authorization: localStorage.getItem('encodedToken') },
      }
    )
    if (response.status === 201) {
      notesDispatch({ type: 'ADD_ARCHIVE', payload: response.data })
      Toast('Successfully added to archive.', 'success')
    }
  } catch (error) {
    Toast('Oops.. something went wrong. Try again later', 'error')
  }
}
