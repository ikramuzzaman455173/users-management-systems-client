import React, { useState } from 'react';

import { FaEdit, FaUserAlt, FaTrashAlt } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const usersDAta = useLoaderData()
  const [data, setData] = useState(usersDAta);

  // const [user, setUser] = useState(usersDAta)
  // console.log(usersDAta);

  const handleDeleteUser = (id) => {
    // console.log('user', id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(datas => {
            if (datas.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'User has been deleted.',
                'success'
              )
            }
            // console.log(datas);
            const remainingUser = data.filter(e => e._id !== id)
            setData(remainingUser)
          })
      }
    })
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <Link to="/addUser" className='flex items-center border-2 justify-center p-2 my-5 rounded-md text-purple-500 font-bold text-xl w-[150px]'>New User <FaUserAlt className='pl-2 text-3xl' /> </Link>
      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-slate-600 text-left text-xs text-white font-bold uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 bg-slate-600 text-left text-xs text-white font-bold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-slate-600 text-left text-xs text-white font-bold uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-slate-600 text-left text-xs text-white font-bold uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 bg-slate-600 text-left text-xs text-white font-bold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-slate-600 text-left text-xs text-white font-bold uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, i) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm flex items-center gap-4 font-medium">
                      <Link to={`/updateUser/${item._id}`} className="mr-2">
                        <FaEdit className='text-slate-500 active:text-green-600 text-xl' />
                      </Link>
                      <Link onClick={() => handleDeleteUser(item._id)}>
                        <FaTrashAlt className='text-red-500 active:text-red-600 text-xl' />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
