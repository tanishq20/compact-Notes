export const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_NOTE':
      return { ...state, notes: action.payload }
    case 'EDIT_NOTE':
      return { ...state, notes: action.payload }
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: action.payload,
        pinnedNotes: [
          ...state.pinnedNotes.filter(
            (item) => item._id !== action.payload._id
          ),
        ],
      }
    case 'TRASHED_NOTE':
      return {
        ...state,
        trashNotes: [...state.trashNotes, action.payload],
        pinnedNotes: [
          ...state.pinnedNotes.filter(
            (item) => item._id !== action.payload._id
          ),
        ],
      }
    case 'DELETE_NOTE_FROM_TRASH':
      return {
        ...state,
        trashNotes: [
          ...state.trashNotes.filter((item) => item._id !== action.payload),
        ],
      }
    default:
      return { ...state }
  }
}
