import { Button, Card, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import validator from 'validator';

function Login({ setToken, setPage }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		setLoading(true);
		const tempErrors = { email: '', password: '' };
		if (!validator.isEmail(email)) {
			tempErrors.email = 'Enter valid email address.';
		}
		if (password.length === 0) {
			tempErrors.password = 'Input password.';
		}
		if (tempErrors.email.length === 0 && tempErrors.password.length === 0) {
			await axios
				.post('https://reqres.in/api/login', { email, password })
				.then((res) => {
					setToken(res.data.token);
					setPage('Success');
				})
				.catch(() => {
					tempErrors.email = 'Email not found';
				});
		}
		setLoading(false);
		setErrors(tempErrors);
	}, [email, errors, password, loading]);

	const onChangeEmail = useCallback(
		(e) => {
			setEmail(e.target.value);
			if (
				validator.isEmail(e.target.value) &&
				errors.email === 'Enter valid email address.'
			)
				setErrors({ ...errors, email: '' });
		},
		[email, errors]
	);

	const onChangePassword = useCallback(
		(e) => {
			setPassword(e.target.value);
			if (e.target.value.length > 0 && errors.password === 'Input password.')
				setErrors({ ...errors, password: '' });
		},
		[password, errors]
	);

	return (
		<Card className="login">
			<TextField
				required
				label="Email"
				type="email"
				error={!!errors.email}
				value={email}
				onChange={onChangeEmail}
			/>
			{errors.email && <div className="error">{errors.email}</div>}
			<div style={{ height: '20px' }} />
			<TextField
				required
				label="Password"
				type="password"
				className="input"
				autoComplete="current-password"
				error={!!errors.password}
				value={password}
				onChange={onChangePassword}
			/>
			{errors.password && <div className="error">{errors.password}</div>}
			<div style={{ height: '20px' }} />
			<Button variant="contained" onClick={onSubmit} disabled={loading}>
				{loading ? <CircularProgress size={24} /> : 'Login'}
			</Button>
		</Card>
	);
}

export default Login;
