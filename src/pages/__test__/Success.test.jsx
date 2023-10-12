import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Success from '../Success';

describe('App tests', () => {
	it('should render Success page correctly', () => {
		render(<Success />);
		const success = screen.getByText(/You have successfully logged in./i);
		expect(success).toBeInTheDocument();
	});
});
