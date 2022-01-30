import axios from 'axios'
import { useEffect } from 'react'

function App() {
	const config = {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'multipart/form-data',
			Authorization: 'Bearer 2f3c4667-e701-477b-82bb-580dd0eaf5bb',
		},
	}

	let data = new FormData()
	data.append('email', 'test@user1.com')
	data.append('password', '12345678')
	data.append('confirmation', '12345678')

	useEffect(() => {
		const fechtPosts = async () => {
			axios
				.post('https://api.base-api.io/v1/users', data, config)
				.then((res) => {
					console.log(JSON.stringify(res.data))
				})
				.catch((err) => {
					console.log(err.response.data.error)
				})
		}

		fechtPosts()
	}, [])

	return (
		<div className='App'>
			<button>test create user</button>
		</div>
	)
}

export default App
