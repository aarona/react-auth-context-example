import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthProvider';
import { useHistory } from 'react-router-dom';

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
  console.log("Rendering Profile...");
  
  const history = useHistory()
  const { currentUser } = useContext(AuthContext)
  
  let loggedIn = currentUser !== null

  if (!loggedIn) {
    history.push("/login")
    return <></>
  }

  return <>
    <h1>My Profile</h1>
    My email address is: {currentUser?.uid}
  </>
}