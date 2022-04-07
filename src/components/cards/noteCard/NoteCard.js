import { useLocation } from 'react-router-dom'
import {
  deleteNotes,
  deleteNotesFromTrash,
  restoreNotesFromTrash,
} from '../../../apiCalls'
import { useNotes } from '../../../context'
import style from './NoteCard.module.css'
export const Notecard = ({ noteDetails, setToggleNewNoteCard }) => {
  const { _id, title, label, priority, noteBody, date } = noteDetails

  const { setNote, notesDispatch } = useNotes()

  const { pathname } = useLocation()

  const handleEditNotes = (noteDetails) => {
    setNote({ ...noteDetails, isEditing: (noteDetails.isEditing = true) })
    setToggleNewNoteCard(true)
  }

  return (
    <div>
      <div className={`${style.saved_notes_wrapper} rounded-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-1'>
            <span className={style.notes_tag}>{label}</span>
            <span className={style.notes_tag}>{priority}</span>
          </div>
          <div>
            <i className='fa-solid fa-thumbtack btn-icon-size'></i>
          </div>
        </div>
        <p className={style.notes_title}>{title}</p>
        <div>
          <p
            className={style.notes_body}
            dangerouslySetInnerHTML={{
              __html: noteBody,
            }}
          ></p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className={style.notes_date}>Created on: {date}</p>
          </div>
          {pathname === '/notes' && (
            <div className='d-flex gap-1'>
              <button className='btn btn-primary btn-float btn-icon'>
                <i className='fa-solid fa-palette btn-icon-size'></i>
              </button>
              <button className='btn btn-primary btn-float btn-icon'>
                <i className='fas fa-regular fa-tag  btn-icon-size' />
              </button>
              <button className='btn btn-primary btn-float btn-icon'>
                <i className='fas fa-regular fa-box-archive btn-icon-size' />
              </button>
              <button
                className='btn btn-primary btn-float btn-icon'
                onClick={() => handleEditNotes(noteDetails)}
              >
                <i className='fas fa-edit btn-icon-size' />
              </button>
              <button
                className='btn btn-primary btn-float btn-icon'
                onClick={() => deleteNotes(noteDetails, notesDispatch)}
              >
                <i className='fa-solid fa-trash btn-icon-size'></i>
              </button>
            </div>
          )}
          {pathname === '/trash' && (
            <div className='d-flex gap-1'>
              <button
                className='btn btn-primary btn-float btn-icon'
                onClick={() =>
                  restoreNotesFromTrash(noteDetails, notesDispatch)
                }
              >
                <i class='fa-solid fa-rotate-left btn-icon-size'></i>
              </button>
              <button
                className='btn btn-primary btn-float btn-icon'
                onClick={() => deleteNotesFromTrash(_id, notesDispatch)}
              >
                <i className='fa-solid fa-trash btn-icon-size'></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
