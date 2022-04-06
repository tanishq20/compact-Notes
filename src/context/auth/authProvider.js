import { createContext, useContext, useReducer } from 'react'
import { authReducer } from '../../reducer'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    userLogin: false,
    userDetails: {},
    encodedToken: '',
    authLoading: true,
  })

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
