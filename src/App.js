import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUserAction, signInUserAction } from './store/actions/authActions'

function App() {
	const state = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	let data = new FormData()
	data.append('email', 'test@test2.com')
	data.append('password', '1234')

	useEffect(() => {
		dispatch(signInUserAction(data))
	}, [])

	return (
		<div className='App'>
			<button onClick={() => console.log(state)}>Get State</button>
		</div>
	)
}

export default App
