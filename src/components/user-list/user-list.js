import React, { Component } from 'react';
import UserListItem from '../user-list-item/user-list-item';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'
// import { bindActionCreators } from 'redux';

import { usersLoaded, usersError, selectUser, deleteUser,
updateUser } from '../../actions/index'
import './user-list.css'

class UserList extends Component {

  getUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.props.users)
        // console.log(this.props.users);
      }, 900)
    })
  }
  componentDidMount() {
    // receive data
    const { 
      usersLoaded, 
      usersError } = this.props;


      this.getUsers()
      .then((data) => {
          setTimeout(() => {
            usersLoaded(data) 
          }, 900);
            
          })
        .catch((err) => usersError(err))

                      // usersRequested()
                      // contactsService.getUsers()
                      // .then((data) => {
                      //     setTimeout(() => {
                      //       usersLoaded(data) 
                      //     }, 900);
                          
                      //   })
                      // .catch((err) => usersError(err))
    
    
    
  }

  render() {
    const { users, loading, error } = this.props;
    
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <ErrorIndicator />
    }

    return (
      <div className="user-list">
        
        <ul className="list-group">
          {
            users.map( (user) => {
              return (
                <li 
                  key={user.id} 
                  className="list-group-item bg-dark text-white"
                  onClick={() => {
                    this.props.selectUser(user.id)
                  }}>
                    <UserListItem 
                    user={user}
                    deleteUser={this.props.deleteUser}
                    updateUser={this.props.updateUser} />
                </li>
              )
            })
          } 
        </ul>
        
      </div>
      
    )
  }
}

const mapStateToProps = ( {user: {users, loading, selectedUserId}} ) => {
  return { users, loading, selectedUserId }
};

// const mapDispatchToProps = (dispatch) => {

//   // return {
//   //   booksLoaded: (newBooks) => {
//   //     dispatch(booksLoaded(newBooks))
//   //   }
//   // }

//   // 1-й аргумент - объект с нашими actionCreators
//   // 2-й аргумент - dispatch
//   return bindActionCreators({
//     booksLoaded
//   }, dispatch)
// } 
// or
const mapDispatchToProps = {
  usersLoaded,
  usersError, 
  selectUser,
  deleteUser,
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);