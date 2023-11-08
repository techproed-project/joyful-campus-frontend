import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLock } from "react-icons/ai";

const UserMenuGuest = () => {
  return (
    <Link to="/login" className="text-dark"><AiFillLock/> Login</Link>
  )
}

export default UserMenuGuest