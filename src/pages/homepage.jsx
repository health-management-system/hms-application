import '../App.css';
import { Amplify } from 'aws-amplify';

import React from 'react';
import { useNavigate } from "react-router-dom";

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './homepage.css';
import ProfileLayout from "../components/layouts/ProfileLayout";
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Homepage({ signOut, user}) {

    let navigate = useNavigate()
    
    const doctorInfo = () => {
        let path = '/doctorInfo'
        navigate(path)
    }

    const patientInfo = () => {
      let path = '/patientInfo'
      navigate(path)
    }


  return (

        <div className="background-image">
        <div className="content">
        <b><h1 data-cy='homepage-header'>Welcome {user.username}</h1></b>
        <p>Select your Role to be redirected</p>
        <div>
        <button className='home-button hover:bg-priHover' onClick={signOut} >Sign out</button>
        <button className='home-button hover:bg-priHover' onClick={doctorInfo} >Doctor Info Page</button>
        <button className='home-button hover:bg-priHover' onClick={patientInfo}>Patient Info Page</button>
        </div>
        </div>
        </div>
  );
}

export default withAuthenticator(Homepage);