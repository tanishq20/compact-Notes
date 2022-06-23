export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LABEL':
      return { ...state, label: action.payload }
    case 'SET_PRIORITY':
      return { ...state, priority: action.payload }
    case 'SET_SORT_BY_DATE':
      return { ...state, sortByDate: action.payload }
    case 'RESET_ALL':
      return { ...state, label: '', priority: '', sortByDate: '' }
    default:
      return { ...state }
  }
}
