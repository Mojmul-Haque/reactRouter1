import React, { useEffect, useState } from 'react'
import User from '../User/User';
import UserDetails from '../UserDetails/UserDetails';
import NoMatch from '../noMatch/NoMatch';
import { Route, Router,Switch } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([])
  const [userDetail, setUserDetials] = useState([])
  const handleUseDetails = (user) => {
    // console.log('hi',user);
    setUserDetials(user)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <div className='container'>
        <h3>Users: {users.length} </h3>
        <div className='row'>
          {users.map(user => (
            <User user={user} key={user.id} handleUseDetails={handleUseDetails}></User>
          ))}
        </div>
        {/* <UserDetails></UserDetails> */}
      </div>
    </div>
  )
}

export default Home
