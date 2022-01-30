import { combineReducers } from 'redux'
import { authReducer } from './reducers/authReducer'
import { noteReducer } from './reducers/noteReducer'

const reducres = combineReducers({
	auth: authReducer,
	note: noteReducer,
})

export default reducres
