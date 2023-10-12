import {
	render,
	fireEvent,
	waitFor,
	screen,
	act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import React from 'react';
import Login from '../Login';

jest.mock('axios');

describe('<Login />', () => {
	// Test for invalid email and empty password
	it('invalid email and empty password', async () => {
		render(<Login />);

		fireEvent.input(screen.getByLabelText('Email', { exact: false }), {
			target: { value: 'wrongemail@' },
		});
		fireEvent.input(screen.getByLabelText('Password', { exact: false }), {
			target: { value: '' },
		});

		fireEvent.click(screen.getByText('Login'));

		await waitFor(() => {
			expect(
				screen.getByText('Enter valid email address.')
			).toBeInTheDocument();
			expect(screen.getByText('Input password.')).toBeInTheDocument();
		});
	});

	// Test for successful login
	it('successful login', async () => {
		axios.post.mockResolvedValue({ data: { token: 'testToken' } });

		render(<Login setToken={jest.fn()} setPage={jest.fn()} />);
		const email = screen.getByLabelText('Email', { exact: false });
		const password = screen.getByLabelText('Password', { exact: false });
		const loginButton = screen.getByText('Login');

		await act(async () => {
			fireEvent.input(email, { target: { value: 'success@test.com' } });
			fireEvent.input(password, { target: { value: 'successPassword' } });
			fireEvent.click(loginButton);

			await waitFor(() => {
				expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', {
					email: 'success@test.com',
					password: 'successPassword',
				});
			});
		});
	});

	// Test for unsuccessful login
	it('unsuccessful login', async () => {
		axios.post.mockRejectedValue(new Error());

		render(<Login />);

		fireEvent.input(screen.getByLabelText('Email', { exact: false }), {
			target: { value: 'failed@test.com' },
		});
		fireEvent.input(screen.getByLabelText('Password', { exact: false }), {
			target: { value: 'failedPassword' },
		});

		fireEvent.click(screen.getByText('Login'));

		await waitFor(() => {
			expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', {
				email: 'failed@test.com',
				password: 'failedPassword',
			});
			expect(screen.getByText('Email not found')).toBeInTheDocument();
		});
	});
});
