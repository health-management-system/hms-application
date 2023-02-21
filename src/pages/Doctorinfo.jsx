import { useState } from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Outlet } from "react-router";


function DoctorInfo({ signOut, user}) {
    return (
        <div>
            <ProfileLayout signOut={signOut}>
                <Outlet context={user}/>
            </ProfileLayout>
        </div>
    );
}

export default  withAuthenticator(DoctorInfo)