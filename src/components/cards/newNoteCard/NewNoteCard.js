import style from './NewNoteCard.module.css'
import ReactQuill from 'react-quill'
import { useNotes } from '../../../context'
import { addNewNotes, editNotes } from '../../../apiCalls'

export const NewNoteCard = ({ setToggleNewNoteCard }) => {
  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
    'code',
  ]
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'code'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  }

  const { note, setNote, notesDispatch, defaultNotes } = useNotes()

  const handleNoteChange = (e) => {
    const { name, value } = e.target
    setNote({ ...note, [name]: value })
  }

  const handleNewNoteSubmit = (e) => {
    e.preventDefault()
    note.isEditing
      ? editNotes(note, notesDispatch)
      : addNewNotes(note, notesDispatch)
    setNote({ ...defaultNotes })
    setToggleNewNoteCard(false)
  }

  return (
    <div className={`${style.new_note_page} d-flex flex-col`}>
      <div
        className={`${style.new_note_showcase} w-full justify-content-center align-items-center flex-wrap`}
      >
        <form method='post' onSubmit={(e) => handleNewNoteSubmit(e)}>
          <div className={`${style.new_note_wrapper} d-flex flex-col`}>
            <div className='input-container'>
              <label htmlFor='name' className='input-label'>
                Title <span className='required-mark'>*</span>
              </label>
              <input
                type='text'
                id='title'
                name='title'
                placeholder='Title'
                className='input-field'
                value={note.title}
                onChange={(e) => handleNoteChange(e)}
                required
              />
            </div>
            <div className='input-container'>
              <p className='input-label'>
                Label <span className='required-mark'>*</span>
              </p>
              <div className='d-flex' style={{ gap: '4rem' }}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    id='home'
                    name='label'
                    className='input-selector-field'
                    value='home'
                    onChange={(e) => handleNoteChange(e)}
                    checked={note.label === 'home'}
                    required
                  />
                  <label htmlFor='home' className='input-selector-label'>
                    Home
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    id='work'
                    name='label'
                    className='input-selector-field'
                    value='work'
                    onChange={(e) => handleNoteChange(e)}
                    checked={note.label === 'work'}
                    required
                  />
                  <label htmlFor='work' className='input-selector-label'>
                    Work
                  </label>
                </div>
              </div>
            </div>
            <div className='input-container'>
              <p className='input-label'>
                Priority <span className='required-mark'>*</span>
              </p>
              <div className='d-flex' style={{ gap: '4rem' }}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    id='high'
                    name='priority'
                    className='input-selector-field'
                    value='high'
                    onChange={(e) => handleNoteChange(e)}
                    checked={note.priority === 'high'}
                    required
                  />
                  <label htmlFor='high' className='input-selector-label'>
                    High
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    id='medium'
                    name='priority'
                    className='input-selector-field'
                    value='medium'
                    onChange={(e) => handleNoteChange(e)}
                    checked={note.priority === 'medium'}
                    required
                  />
                  <label htmlFor='medium' className='input-selector-label'>
                    Medium
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    id='low'
                    name='priority'
                    className='input-selector-field'
                    value='low'
                    onChange={(e) => handleNoteChange(e)}
                    checked={note.priority === 'low'}
                    required
                  />
                  <label htmlFor='low' className='input-selector-label'>
                    Low
                  </label>
                </div>
              </div>
            </div>
            <div className={style.quill_editor}>
              <ReactQuill
                className='editor'
                theme='snow'
                modules={modules}
                formats={formats}
                placeholder='Take a note...'
                value={note.noteBody}
                onChange={(e) => setNote({ ...note, noteBody: e })}
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              {note.isEditing ? 'Update Note' : 'Add Note'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
