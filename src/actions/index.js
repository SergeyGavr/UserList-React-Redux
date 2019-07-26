
const usersLoaded = (newUsers) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: newUsers
  }
}

const usersError = (error) => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
}

const selectUser = (selectedUserId) => {
  return {
    type: 'SELECT_USER',
    payload: selectedUserId
  }
}

const deleteUser = (deletedUserId) => {
  return {
    type: 'DELETE_USER',
    payload: deletedUserId
  }
}

const updateUser = (updatedUserId) => {
  return {
    type: 'UPDATE_USER',
    payload: updatedUserId
  }
}

const changeUserValues = (changedValues, changedId) => {
  
  return {
    type: 'CHANGE_USER_VALUES',
    payload: changedValues,
    id: changedId
  }
}

const addUser = (values) => {
  
  return {
    type: 'ADD_USER',
    payload: values,
    id: +Date.now()
  }
}


export {
  usersLoaded,
  usersError,
  selectUser,
  deleteUser,
  updateUser,
  changeUserValues,
  addUser
}