import axios from 'axios'

const config = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'multipart/form-data',
		Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
	},
}

export const createNoteCateg = (data) => {
	return (dispatch) => {
		axios.post().then().catch()
	}
}
