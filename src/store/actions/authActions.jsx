import axios from 'axios'

const config = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'multipart/form-data',
		Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
	},
}

export const createUserAction = (data) => {
	return (dispatch) => {
		axios
			.post('https://api.base-api.io/v1/users', data, config)
			.then((res) => {
				dispatch({
					type: 'CREATE_NEW_USER',
					payload: res.data,
				})
			})
			.catch((err) => {
				dispatch({
					type: 'CREATE_NEW_USER_ERROR',
					payload: err.response.data.error,
				})
			})
	}
}

export const signInUserAction = (data) => {
	return (dispatch) => {
		axios
			.post('https://api.base-api.io/v1/sessions', data, config)
			.then((res) => {
				dispatch({
					type: 'USER_LOGED_SUCCESSFUL',

					payload: res.data,
				})
			})
			.catch((err) => {
				dispatch({
					type: 'USER_LOGED_ERROR',
					payload: err.response.data.error,
				})
			})
	}
}
