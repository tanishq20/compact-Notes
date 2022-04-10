import axios from 'axios'
import { Toast } from '../../components'

export const deleteNotesFromArchive = async (_id, notesDispatch) => {
  try {
    const response = await axios.delete(`/api/archives/delete/${_id}`, {
      headers: { authorization: localStorage.getItem('encodedToken') },
    })
    if (response.status === 200) {
      notesDispatch({
        type: 'DELETE_ARCHIVE_NOTE',
        payload: response.data.archives,
      })
      Toast('Successfully deleted note from archive.', 'success')
    }
  } catch (error) {
    Toast('Oops.. something went wrong. Try again later', 'error')
  }
}
