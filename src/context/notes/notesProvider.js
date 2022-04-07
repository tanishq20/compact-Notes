import { createContext, useContext, useReducer, useState } from 'react'
import { notesReducer } from '../../reducer'

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

  const [note, setNote] = useState(defaultNotes)

  const [notesState, notesDispatch] = useReducer(notesReducer, {
    notes: [],
    pinnedNotes: [],
    archiveNotes: [],
    trashNotes: [],
  })

  return (
    <NotesContext.Provider
      value={{ notesState, notesDispatch, note, setNote, defaultNotes }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => useContext(NotesContext)
