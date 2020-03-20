import React, { useEffect, useContext, useState } from 'react'
import { Routes } from './Routes';
import { AuthContext } from './components/AuthProvider';

interface AppProps {

}

export const App: React.FC<AppProps> = () => {
  console.log("Rendering App...");
  const [, setLoading] = useState(true)
  const { setCurrentUser } = useContext(AuthContext)

  useEffect(() => {
    console.log("Calling useEffect");
    
    const uid = localStorage.getItem('uid')
    
    if(uid) {
      console.log("Setting current user!");
      setCurrentUser!({ uid })
      setLoading(false)
    }
  }, [setCurrentUser])

  return <Routes />;
}