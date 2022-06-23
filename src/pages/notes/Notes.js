import { useState } from 'react'
import {
  Sidebar,
  NewNoteCard,
  Notecard,
  Search,
  Filter,
} from '../../components'
import { useAuth, useFilter, useNotes } from '../../context'
import { Link } from 'react-router-dom'

export const Notes = () => {
  const [toggleNewNoteCard, setToggleNewNoteCard] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)

  const { authState } = useAuth()
  const { userLogin } = authState

  const { notesState, setNote, defaultNotes } = useNotes()
  const { notes } = notesState

  const { filteredNotes } = useFilter()

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
                      onClick={() => setToggleNewNoteCard(false)}
                    >
                      <i className='fas fa-times-circle dismiss-btn-icon'></i>
                    </button>
                    <NewNoteCard setToggleNewNoteCard={setToggleNewNoteCard} />
                  </div>
                ) : (
                  <div className='d-flex justify-content-center align-items-center'>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        setToggleNewNoteCard(true)
                        setToggleFilter(false)
                        setNote(defaultNotes)
                      }}
                    >
                      Create New Note
                    </button>
                  </div>
                )}
                {notes[0] && (
                  <>
                    <p className='category-heading'>My Notes</p>
                    <div className='d-flex align-items-center justify-content-center gap-1'>
                      <Search />
                      <button
                        className='btn btn-secondary'
                        onClick={() => {
                          setToggleFilter(true)
                          setToggleNewNoteCard(false)
                        }}
                      >
                        Filter <i class='fa-solid fa-filter btn-icon-size'></i>
                      </button>
                    </div>
                    {toggleFilter && (
                      <div className='position-relative'>
                        <button
                          className='dismiss-btn'
                          onClick={() => setToggleFilter(false)}
                        >
                          <i className='fas fa-times-circle dismiss-btn-icon'></i>
                        </button>
                        <Filter />
                      </div>
                    )}
                    {filteredNotes?.map((noteDetails) => (
                      <Notecard
                        key={noteDetails._id}
                        noteDetails={noteDetails}
                        setToggleNewNoteCard={setToggleNewNoteCard}
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
