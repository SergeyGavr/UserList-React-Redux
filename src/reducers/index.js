import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './user'

const reducers = {
  form: formReducer,
  user: userReducer
}

const reducer = combineReducers(reducers)

export default reducer