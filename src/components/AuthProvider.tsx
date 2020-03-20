import React, { createContext, useContext, useState } from 'react'
import { IAuthState, User } from '../util/interfaces'

interface AuthProviderProps {

}

export const AuthContext = createContext<IAuthState>({
  currentUser: null,
  setCurrentUser: null
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const ctx = useContext(AuthContext)
  const [currentUser, setCurrentUser] = useState<User>(null)
  ctx.currentUser = currentUser
  ctx.setCurrentUser = setCurrentUser

  return <AuthContext.Provider value={ctx}>
    { children }
  </AuthContext.Provider>
}