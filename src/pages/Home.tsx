import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthProvider'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
  console.log("Rending Home...");
  
  const { currentUser } = useContext(AuthContext)
  let loggedIn = currentUser !== null
  let body = ""

  if (loggedIn) {
    body = `Hello, ${currentUser?.uid}!`
  }

  return <>
    <h1>Home</h1>
    {body}
  </>
}