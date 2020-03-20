import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../components/AuthProvider'
import { logout } from '../util/authentication'

interface LogoutProps {

}

export const Logout: React.FC<LogoutProps> = () => {
  const { setCurrentUser } = useContext(AuthContext)

  logout().catch((error) => { })
  setCurrentUser!(null)
  localStorage.removeItem('uid')

  return <Redirect to="/login" />;
}