const INITIAL_STATE = {}

export const noteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'value':
			return state

		default:
			return state
	}
}
