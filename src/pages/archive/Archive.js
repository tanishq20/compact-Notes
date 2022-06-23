import { Link } from 'react-router-dom'
import { Notecard, Sidebar } from '../../components'
import { useAuth, useNotes } from '../../context'

export const Archive = () => {
  const { authState } = useAuth()
  const { userLogin } = authState

  const { notesState } = useNotes()
  const { archiveNotes } = notesState
  return (
    <>
      {userLogin ? (
        <div className='notes-page d-flex'>
          <Sidebar />
          <div className='notes-wrapper'>
            <div className='notes-showcase'>
              <div className='notes-showcase-items'>
                {archiveNotes.length !== 0 ? (
                  <>
                    <p className='category-heading'>Archived Notes</p>
                    {archiveNotes?.map((noteDetails) => (
                      <Notecard
                        key={noteDetails._id}
                        noteDetails={noteDetails}
                      />
                    ))}
                  </>
                ) : (
                  <h1 className='category-heading'>Your Archive is Empty</h1>
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
