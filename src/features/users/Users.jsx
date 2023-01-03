import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './users.css'
import {fetchUsers, selectAllUsers} from './usersSlice'

function Users() {
  const dispatch = useDispatch()
  const allUsers = useSelector(selectAllUsers)

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])


    const content = allUsers.map(user=>{
      return  <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
    })

  return (<table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
      </tr>
     {content}

    </table>
  )
}

export default Users