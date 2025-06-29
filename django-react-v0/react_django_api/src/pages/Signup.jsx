import React, { useEffect, useState } from 'react'
import {Signup as SignupComponent} from '../components'
import ProgressBar from '../components/ProgressBar'

function Signup() {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 600);
  },[])

  if(loading) return <ProgressBar />
  return (
    <div>
        <SignupComponent />
    </div>
  )
}

export default Signup