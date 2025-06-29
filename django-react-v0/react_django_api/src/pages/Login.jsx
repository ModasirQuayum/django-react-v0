import React, { useEffect, useState } from 'react'
import {Login as LoginComponent} from '../components'
import ProgressBar from '../components/ProgressBar'
function Login() {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 600);
  },[])

  if(loading) return <ProgressBar />
  return (
    <div>
        <LoginComponent />
    </div>
  )
}

export default Login