import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Card } from '@mui/material';
import React from 'react';

function Success({ token, setPage }) {
	return (
		<Card className="login">
			<div>
				<CheckCircleIcon
					fontSize="large"
					sx={{ color: 'green', marginBottom: '10px' }}
				/>
			</div>
			<p>You have successfully logged in.</p>
			<p style={{ marginBottom: '40px' }}>Token: {token}</p>
			<Button variant="contained" onClick={() => setPage('Login')}>
				OK
			</Button>
		</Card>
	);
}
export default Success;
