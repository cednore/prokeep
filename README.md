# Initial Instructions for Home Assignment

I’m excited to invite you to the next step of the Prokeep hiring process: the Technical Challenge.
Please reply to this email and confirm you have received and give an estimated delivery date
Instructions:
Build a React app using your favorite boilerplate or seed (or from scratch), that consists of a login form that sends a login REST post request to this stubbed REST service: https://reqres.in You are free to use whatever tooling you want and whatever libraries you feel best solves the problem. Bonus points if the form looks sharp.

1. The login form should have an email input and a password input.
2. The login form should validate that the email is a valid email input and the password field has at least one character before you process the submit action.
3. You are free to do on change or submit validation – extra points for onChange.
4. Build a unit test for the form – testing both a valid login and an invalid login. you are free to use whatever testing stack you like.
5. Include a “dev” or “run” script in your package.json scripts
6. Include a “test” script in your package.json scripts
7. Upload to a code sharing service such as GitHub, Gitlab, etc. and let us know where to find it.
   reqres.in (When complete, please let us know and share with user “trippp” on Github, or, if you are sharing elsewhere, we can provide a username by request.)
   Reqres – A hosted REST-API ready to respond to your AJAX requests
   A hosted REST-API ready to respond to your AJAX requests


# Prokeep Technical Challenge

This repository contains the code regarding the Prokeep Technical Challenge.

## Project Setup

The project is built on top of React 18, and it uses the MUI framework for the sharp-looking UI, Axios for doing the AJAX request, Jest and Enzyme for unit tests. In addition, it also strictly follows Airbnb's Javascript (React) style guide thanks to Eslint.

## Repository Structure

The `client` directory contains the main source code of the React app with the following key files:

- `package.json`: lists all the dependencies required for the app and the scripts to run & test the app.

- `src/components/Login.jsx`: contains the Login form component. It has the fields for email and password inputs. It validates the inputs using the `validator` library and interacts with the stubbed REST service using `axios`.

- `src/components/Success.jsx`: offers a success message on successful login including the received token.

## Installation & Running Locally

Clone this repository and run the following commands:

- `npm install` : installs the dependencies
- `npm run dev` or `npm start`: starts the react app in development mode
- `npm run test`: triggers the unit tests

## Live Demo

You can view a live demo and play with the application by clicking [here](https://codesandbox.io/).

## Contact

If you faced any issues while implementing the app feel free to reach out, I'd be more than happy to help.