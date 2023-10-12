import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
	it('should render Login page correctly', () => {
		render(<App />);
		const heading = screen.getByText(/Login/i);
		const email = screen.getByLabelText(/Email/i);
		const password = screen.getByLabelText(/Password/i);
		expect(heading).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(password).toBeInTheDocument();
	});
});
