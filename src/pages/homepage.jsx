import '../App.css';
import { Amplify } from 'aws-amplify';

import React from 'react';
import { useNavigate } from "react-router-dom";

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Homepage({ signOut, user}) {

    let navigate = useNavigate()
    const doctorInfo = () => {
        let path = '/doctorInfo'
        navigate(path)
    }

  return (
    <div>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <button onClick={doctorInfo}>Doctor Info Page</button>
    </div>

  );
}

export default withAuthenticator(Homepage);