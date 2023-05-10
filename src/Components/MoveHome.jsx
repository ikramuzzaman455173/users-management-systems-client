import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft } from 'react-icons/ai';
const MoveHome = () => {
  return (
    <>
      <Link to="/" className="text-blue-600 font-medium mt-5 pl-5 text-xl flex items-center"><AiOutlineDoubleLeft /> All Users</Link>
    </>
  )
}

export default MoveHome