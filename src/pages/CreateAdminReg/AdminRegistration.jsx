import React from 'react'
import { useSelector } from 'react-redux'
import UserRegistration from '../Registration/UserRegistration'

export const AdminRegistration = () => {
    const userRole=useSelector(x=>x?.user?.data.role);
  return <UserRegistration userRole={userRole}></UserRegistration> ;
}
