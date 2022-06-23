import { Link } from 'react-router-dom'
import { Notecard, Sidebar } from '../../components'
import { useAuth, useNotes } from '../../context'

export const Trash = () => {
  const { authState } = useAuth()
  const { userLogin } = authState

  const { notesState } = useNotes()
  const { trashNotes } = notesState

  return (
    <>
      {userLogin ? (
        <div className='notes-page d-flex'>
          <Sidebar />
          <div className='notes-wrapper'>
            <div className='notes-showcase'>
              <div className='notes-showcase-items'>
                {trashNotes.length !== 0 ? (
                  <>
                    <p className='category-heading'>Trashed Notes</p>
                    {trashNotes?.map((noteDetails) => (
                      <Notecard
                        key={noteDetails._id}
                        noteDetails={noteDetails}
                      />
                    ))}
                  </>
                ) : (
                  <h1 className='category-heading'>Your Trash is Empty</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>
          You are not login.{' '}
          <Link to={'/login'} className='global-redirect-btn'>
            Login
          </Link>{' '}
          First to access notes!{' '}
        </h1>
      )}
    </>
  )
}
