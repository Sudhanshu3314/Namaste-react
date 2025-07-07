import React from 'react'

const User = (props) => {
    console.log(props)
    const {name,location} = props;
  return (
    <div className='user-card'>
        <hr />
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : sudhanshub810@gmail.com</h2>
    </div>
  )
}

export default User
