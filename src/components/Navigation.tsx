import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

interface NavigationProps {

}

export const Navigation: React.FC<NavigationProps> = () => {
  const history = useHistory()
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  let loggedIn = currentUser !== null

  const handleLogOut = async (e:any) => {
    e.preventDefault()

    setCurrentUser!(null)
    localStorage.removeItem('uid')

    history.push('/login')
  }

  return <header>
    <div><Link to="/">Home</Link></div>
    {loggedIn ? "" : <div><Link to="/login">Log In</Link></div>}
    {loggedIn ? <div><Link to="/profile">My Profile</Link></div> : ""}
    {loggedIn ? <div><Link to="/logout" onClick={handleLogOut}>Log Out</Link></div> : ""}
  </header>;
}