const initialState = {
  users: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info"
    }
  ],
  loading: true,
  error: null,
  selectedUserId: null,
  updatedUserId: null,
  updatedUserValues: {},
  modeAdd: false
}

const removeUser = (users, index) => {
  return [
    ...users.slice(0, index),
    ...users.slice(index + 1)
  ]
}

const addUser = (users, newUser) => {
  return [
    newUser,
    ...users
  ]
}

const updateUser = (users, index, newUser) => {
  return [
    ...users.slice(0, index),
    newUser,
    ...users.slice(index + 1)
  ]
}

const userReducer = (state = initialState, action) => {


  switch (action.type) {
    
    case 'FETCH_USERS_SUCCESS':
      return {
        users: state.users,
        loading: false,
        error: null,
        selectedUserId: null
      };
    case 'FETCH_USERS_FAILURE':
      return {
        users: [],
        loading: false,
        error: action.payload,
        selectedUserId: null
      };
    case 'SELECT_USER':
      return {
        ...state,
        selectedUserId: action.payload
      }
    case 'DELETE_USER':
      const userId = action.payload
      // const user = state.users.find((user) => user.id === userId )
      const userIndex = state.users.findIndex((item) => item.id === userId )
      return {
        ...state,
        users: removeUser(state.users, userIndex)
      }
    case 'UPDATE_USER':
      const updatedId = action.payload;
      const user = state.users.find((user) => user.id === updatedId )
      // console.log(user);
      return {
        ...state,
        updatedUserValues: {...user},
        updatedUserId: updatedId
      }
    case 'CHANGE_USER_VALUES':
      const changedValues = action.payload;
      // console.log(changedValues);
      const ID = action.id;
      const newUser = {...changedValues, id: ID}
      const updatedUserIndex = state.users.findIndex((item) => item.id === ID )
      console.log(newUser);

      return {
        ...state,
        users: updateUser(state.users, updatedUserIndex, newUser),
        updatedUserValues: {},
        updatedUserId: null
      }
    case 'ADD_USER':
      const id = action.id
      const addedUser = {id, ...action.payload}
      console.log(addedUser);
      return {
        ...state,
        users: addUser(state.users, addedUser),
        
      }
    

    default:
      return state;
  }
  
}

export default userReducer;