import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userdelete } from '../store/reducers/UserReducer'

const Users = () => {


  const { users } = useSelector((state) => state.UserReducer)

  const dispatch =  useDispatch()

  const deleteHandler = (index) =>{
    dispatch(userdelete(index));
  }

  return (
    <div className='m-auto container p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>User List</h1>
      {users.map((user, index) => {
        return <div key={user.id}>
          <h1>{user.name}{" "}
            <span
              onClick={() => deleteHandler(index)}
              className='text-red-500 font-black cursor-pointer'>X</span>
          </h1>
        </div>
      })}
    </div>
  )
}

export default Users;