import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from '../../reducer'
import { useNotes } from '../notes/notesProvider'
import { compose, labelFilter, priorityFilter, sortByDateFilter } from './utils'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const { notesState } = useNotes()
  const { notes } = notesState

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    label: '',
    priority: '',
    sortByDate: '',
  })

  const filteredNotes = compose(
    filterState,
    labelFilter,
    priorityFilter,
    sortByDateFilter
  )(notes)

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredNotes }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
