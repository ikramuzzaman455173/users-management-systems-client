import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <div className='text-center shadow-md text-4xl font-bold p-2 mx-5  border-2 rounded-md mt-5 bg-green-600 text-white'>Users Mangement Systems</div>
      <Outlet />
      <ToastContainer/>
    </>
  )
}

export default App