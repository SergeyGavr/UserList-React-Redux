import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../actions/index'

import './user-info.css'

class UserInfo extends Component {
  render() {
    const {users, selectedUserId} = this.props
    const selectedUser = users.find( (user) => user.id === selectedUserId )
    
    if (!selectedUserId || !selectedUser) {
      return <span>Select a person from list, please</span>
    }
    return(
      <div className="user-info-card">
        
        <div className="card text-white bg-dark mb-3">
          <h3 className="card-header">{selectedUser.name}</h3>
          <div className="card-body">
            <div className="card-text">
              <span className="label">Username:</span>
              <span className="value">{selectedUser.username}</span>
            </div>
            <div className="card-text">
              <span className="label">Email:</span>
              <span className="value">{selectedUser.email}</span>
            </div>
            <div className="card-text">
              <span className="label">Phone:</span>
              <span className="value">{selectedUser.phone}</span>
            </div>
            <div className="card-text">
              <span className="label">Website:</span>
              <span className="value">{selectedUser.website}</span>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( {user: {users, selectedUserId }} ) => {
  return { users, selectedUserId }
};

const mapDispatchToProps = {
  selectUser
}

export default 
  connect(mapStateToProps, mapDispatchToProps)(UserInfo);