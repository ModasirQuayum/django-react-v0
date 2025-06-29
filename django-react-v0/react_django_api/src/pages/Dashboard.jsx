import React, { useEffect, useState } from 'react'
import {Dashboard as DashboardComponent} from "../components"
import ProgressBar from '../components/ProgressBar'
function Dashboard() {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 600);
  },[])

  if(loading) return <ProgressBar />
  return (
    <DashboardComponent />
  )
}

export default Dashboard