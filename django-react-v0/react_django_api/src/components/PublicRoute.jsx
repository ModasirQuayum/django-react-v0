import React from 'react'
import { Navigate } from 'react-router-dom'
import { ACCESS_TOKEN } from '../constants'

function PublicRoute({ children }) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)

  if (accessToken) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default PublicRoute
