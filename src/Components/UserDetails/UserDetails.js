import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { userId } = useParams()
  const [user,setUer]=useState({})
 
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => setUer(data))
  // },[])
  // const userDetails =user.find(usr=>usr.id === Number(userId))
  // console.log(userDetails)

useEffect(()=>{
    const baseUrl =`https://jsonplaceholder.typicode.com/users/${userId}`

    fetch(baseUrl)
    .then(res => res.json())
    .then(data =>setUer(data))
},[])

const {name,phone}  =user;
console.log(user)
  return (
    <div>
      <h3>User Detials:  { userId }</h3>
      <h3>Name: {name}</h3>
      <h3>Phone: {phone}</h3>
      {}
    </div>
  )
}

export default UserDetails
