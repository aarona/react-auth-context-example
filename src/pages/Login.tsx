import React, { useContext, useState } from 'react'
import { AuthContext } from '../components/AuthProvider'
import { useHistory } from 'react-router-dom'
import { login } from '../util/authentication'

interface LoginProps {

}

export const Login: React.FC<LoginProps> = () => {
  console.log("Rending Login...");
  
  const history = useHistory()
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let loggedIn = currentUser !== null

  if (loggedIn) {
    history.push("/profile")
    return <></>
  }

  const onSubmit = async (e:any) => {
    e.preventDefault()
    const user = await login(email, password).catch((error) => {
      setErrorMessage(error)
      return null
    })

    if(user) {
      localStorage.setItem('uid', email)
      setCurrentUser!({ uid: email})
      history.push("/")
    } else {
      setEmail("")
      setPassword("")
    }
  }
  
  return <>
    <h1>Login</h1>
    {errorMessage ? <div>{errorMessage}</div> : ""}
    <form onSubmit={onSubmit}>
      <div><input name="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email}/></div>
      <div><input name="password" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password}/></div>
      <button>Login User</button>
    </form>
  </>
}