import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import { notesReducer } from '../../reducer'
import { useAuth } from '../../context'

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const defaultNotes = {
    title: '',
    label: '',
    priority: '',
    noteBody: '',
    bgColor: '#21272d',
    isPinned: false,
    isEditing: false,
    date: new Date().toLocaleDateString(),
  }

  const { authState } = useAuth()
  const { userLogin } = authState

  const [note, setNote] = useState(defaultNotes)
  console.log(note)

  const [notesState, notesDispatch] = useReducer(notesReducer, {
    notes: [],
    pinnedNotes: [],
    archiveNotes: [],
    trashNotes: [],
  })
  console.log(notesState.notes)

  return (
    <NotesContext.Provider
      value={{ notesState, notesDispatch, note, setNote, defaultNotes }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext)
