import { AuthProvider, NotesProvider } from '../context'

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <NotesProvider>{children}</NotesProvider>
    </AuthProvider>
  )
}
