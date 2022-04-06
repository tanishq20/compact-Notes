import { AuthProvider } from '../context'

export const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}
