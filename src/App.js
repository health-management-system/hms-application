import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { RouterProvider } from "react-router-dom";
import router from './pages/routes';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <RouterProvider router={router}/>
  );
}

export default withAuthenticator(App);
