import React, {Fragment} from 'react';
import UserList from '../user-list/user-list'
import UserInfo from '../user-info/user-info'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <Fragment>
      {/* <Link to='/'>User List</Link>
      <Link to='/update'>Update user</Link> */}
        <div className="home-page d-flex">
          <div className='col-md-6'>
            <div className='row justify-content-around'>
              <h1>Users List</h1>
              <Link to='/update'>
                <button className="float-right btn btn-outline-success mb-3">Add User</button>
              </Link>
              
            </div>
            
           
            <UserList />
          </div>
          
          <div className='col-md-6'>
            <h1>User Info</h1>
            <UserInfo />
          </div>
        </div>
      </Fragment>
      
    
    
    
  )
}

export default HomePage;