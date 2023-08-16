# Use-case - User Contacts

React application provides a form for users to input their contact information and table that displays it after submission. The form is validated with a schema from the Yup library, which ensures that each field has appropriate content. Upon submission, the form dispatches an action to add a new user with the form data and a unique ID to the Redux state.

## Features and specifications

1. Add users contact info to Redux store.
2. Display contact info in the table.

## Created with

- [ReactJS](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Formik](https://formik.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [UUID](https://www.npmjs.com/package/uuid)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)

## Installation

To run application locally follow next steps:

1. On GitHub.com, go to the main repository page - [github.com/lialina/use-case](https://github.com/lialina/use-case)
2. Above the list of files, click `<> Code` button.
3. Copy the URL of the repository.

- To clone the repository over HTTPS, in the HTTPS section, click copy icon.
- To clone a repository using an SSH key, including a certificate issued by your organization's SSH CA, click SSH , and then click copy icon.
- To clone a repository using the GitHub CLI, click GitHub CLI and then click copy icon.

4. Open Terminal.
5. Change the current working directory to the location where the cloned directory should be.
6. Enter `git clone` and paste the URL you copied earlier -> `git clone https://github.com/lialina/use-case`
7. Press Enter to create a local clone.
8. In the project directory, run `npm i` to install all project dependencies.
9. Then run `npm start` to run the app in the development mode.
10. Open [http://localhost:3000](http://localhost:3000) to view app in your browser.
