import { combineReducers } from 'redux'
import { tasksReducer } from '../redux'

const createRootReducer = combineReducers({
  app: tasksReducer,
})

export default createRootReducer
