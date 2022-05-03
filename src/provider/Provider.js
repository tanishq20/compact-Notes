import { AuthProvider, NotesProvider, FilterProvider } from '../context'

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <NotesProvider>
        <FilterProvider>{children}</FilterProvider>
      </NotesProvider>
    </AuthProvider>
  )
}
