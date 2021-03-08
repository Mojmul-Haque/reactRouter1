import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const User = props => {
  const { name, email, id } = props.user
  const history = useHistory()
  const handleUserDetails = userId => {
    history.push(`aboutUser/${userId}`)
  }
  return (
    <div className='col-lg-4'>
      <div className='border py-3 mb-3 rounded text-center'>
        <h5>{name}</h5>
        <h5>{email}</h5>
        <Link to={'aboutUser/' + id}>
          <button className='btn btn-success text-white my-3'>
            Show Detials
          </button>
        </Link>

        <button onClick={()=>handleUserDetails(id)} className="btn btn-warning border border-success">
          Another Button To Show Detials Using history Hooks
        </button>
      </div>
    </div>
  )
}

export default User
