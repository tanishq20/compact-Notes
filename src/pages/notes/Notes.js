import { useState } from 'react'
import { Sidebar, NewNoteCard, Notecard } from '../../components'
import { useAuth, useNotes } from '../../context'
import { Link } from 'react-router-dom'

export const Notes = () => {
  const [toggleNewNoteCard, setToggleNewNoteCard] = useState(false)

  const { authState } = useAuth()
  const { userLogin } = authState

  const { notesState } = useNotes()
  const { notes } = notesState

  return (
    <>
      {userLogin ? (
        <div className='notes-page d-flex'>
          <Sidebar />
          <div className='notes-wrapper'>
            <div className='notes-showcase'>
              <div className='notes-showcase-items'>
                {toggleNewNoteCard ? (
                  <div className='position-relative'>
                    <button
                      className='dismiss-btn'
                      onClick={() => setToggleNewNoteCard((prev) => !prev)}
                    >
                      <i className='fas fa-times-circle dismiss-btn-icon'></i>
                    </button>
                    <NewNoteCard setToggleNewNoteCard={setToggleNewNoteCard} />
                  </div>
                ) : (
                  <div className='d-flex justify-content-center align-items-center'>
                    <button
                      className='btn btn-primary'
                      onClick={() => setToggleNewNoteCard((prev) => !prev)}
                    >
                      Create New Note
                    </button>
                  </div>
                )}
                {notes[0] && (
                  <>
                    <p className='category-heading'>My Notes</p>
                    {notes?.map((noteDetails) => (
                      <Notecard
                        key={noteDetails._id}
                        noteDetails={noteDetails}
                      />
                    ))}
                  </>
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
