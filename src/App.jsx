import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Success from './pages/Success';

function App() {
	const [page, setPage] = useState('Login');
	const [token, setToken] = useState(''); // Token received from https://reqres.in

	return (
		<div className="app">
			{page === 'Login' ? (
				<Login setToken={setToken} setPage={setPage} />
			) : (
				<Success token={token} setPage={setPage} />
			)}
		</div>
	);
}

export default App;
