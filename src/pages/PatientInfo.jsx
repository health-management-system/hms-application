import { useState } from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Outlet } from "react-router";

function PatientInfo({user}) {
   

    return (
        <div className="w-full min-h-screen">
            <ProfileLayout>
                <Outlet context={user}/>
            </ProfileLayout>
        </div>
    );
}



export default  withAuthenticator(PatientInfo)