import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRout() {
    const auth={"Token":localStorage.getItem("IsToken")}
   
  return (
    auth.Token? <Outlet/>:<Navigate to='/'/>
  )
}
