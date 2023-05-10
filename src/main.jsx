import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import AllUsers from './Components/AllUsers'
import UpdateUser from './Components/UpdateUser'
import AddUser from './Components/AddUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AllUsers />,
        loader:()=>fetch('https://user-management-system-server.vercel.app/users')
      },
      {
        path: '/addUser',
        element:<AddUser/>
      },
      {
        path: '/updateUser/:id',
        element: <UpdateUser />,
        loader:({params})=>fetch(`https://user-management-system-server.vercel.app/users/${params.id}`)
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)