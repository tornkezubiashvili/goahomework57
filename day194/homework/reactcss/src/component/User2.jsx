import React from 'react'

function User2({name,role}) {
  return (
    <div>
      <p>User: {name}</p>
      <p>Role: {role}</p>
      <p>Access: {role === "admin"? "Full access":"Limited acces"}</p>
    </div>
  )
}

export default User2