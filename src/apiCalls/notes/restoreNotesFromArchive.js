import axios from 'axios'
import { Toast } from '../../components'

export const restoreNotesFromArchive = async (note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: { authorization: localStorage.getItem('encodedToken') },
      }
    )
    if (response.status === 200) {
      notesDispatch({ type: 'RESTORE_FROM_ARCHIVE', payload: response.data })
      Toast('Successfully restored note from archive.', 'success')
    }
  } catch (error) {
    Toast('Oops.. something went wrong. Try again later', 'error')
  }
}
