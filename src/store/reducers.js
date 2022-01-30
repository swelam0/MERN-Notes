import { combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'

const reducres = combineReducers({
	auth: authReducer,
})

export default reducres
