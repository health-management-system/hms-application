import { useState } from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Outlet } from "react-router";
import toast, { Toaster } from 'react-hot-toast';

function PatientInfo({user, signOut}) {
   

    return (
        <div className="w-full min-h-screen">
            <ProfileLayout signOut={signOut}>
                <Outlet context={user}/>
            </ProfileLayout>
            <Toaster />
        </div>
    );
}



export default  withAuthenticator(PatientInfo)