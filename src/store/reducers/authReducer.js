const INITIAL_STATE = {
	user: {},
	error: null,
}

export const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CREATE_NEW_USER':
			return { ...state, user: action.payload, error: null }

		case 'CREATE_NEW_USER_ERROR':
			return { ...state, error: action.payload }

		case 'USER_LOGED_SUCCESSFUL':
			return { ...state, user: action.payload, error: null }

		case 'USER_LOGED_ERROR':
			return { ...state, user: {}, error: action.payload }

		default:
			return state
	}
}
