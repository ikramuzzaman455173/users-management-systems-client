import InfoText from "./InfoText";
import MoveHome from "./MoveHome";
import {toast } from 'react-toastify';

const AddUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const gender = form.gender.value
    const status = form.status.value
    const user = { name, email, gender, status }
    // console.log(user);
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          // console.log(data);
          toast('New User Added Successfully !!!', { autoClose: 2000 })
          event.target.reset()
        }
      })
  };

  return (
    <>
      <MoveHome />
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-10 border-2 p-4 rounded-md shadow-md">
        <InfoText>Add New User</InfoText>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            required
            className="w-full px-4 py-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
            className="w-full px-4 py-2 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-1 font-medium">
            Gender*
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              value="male"
              name="gender"
              className="mr-2"
              required
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              value="female"
              name="gender"
              // checked={gender === "female"}
              className="ml-6 mr-2"
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block mb-1 font-medium">
            Status*
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              name="status"
              value="active"
              className="mr-2"
            />
            <label htmlFor="active">Active</label>
            <input
              type="radio"
              value="inactive"
              name="status"
              className="ml-6 mr-2"
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md active:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add User
        </button>
      </form>

    </>
  );
};

export default AddUser;
