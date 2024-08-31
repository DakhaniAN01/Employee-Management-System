import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
       <div className="text-center">
       <h1>Admin Panel</h1>
       <div className="list-group">
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
  
</div>
       </div>
    </>
  )
}

export default AdminMenu