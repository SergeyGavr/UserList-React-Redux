import React from 'react';
import './user-list-item.css'
import { Link } from 'react-router-dom'

const UserListItem = ({ user, deleteUser, updateUser }) => {
  const { name, id } = user;

  return (
    <span className="user-list-item">
      <span className="user-list-item-label">{name}</span>
      <button type="button"
              className="btn btn-danger btn-sm float-right"
              onClick={() => deleteUser(id)}>
        <i className="fa fa-trash-o" />
      </button>
      <Link to='/update'>
        <button type="button"
                className="btn btn-warning btn-sm float-right"
                onClick={() => updateUser(id)}>
          <i className="fa fa-edit" />
        </button>
      </Link>
      
    </span>
  )
}

export default UserListItem;