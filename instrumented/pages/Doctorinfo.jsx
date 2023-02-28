import { withAuthenticator } from '@aws-amplify/ui-react';
import ProfileLayout from "../components/layouts/ProfileLayout";
import { Outlet } from "react-router";
import toast, { Toaster } from 'react-hot-toast';

function DoctorInfo({ signOut, user}) {
    return (
        <div>
            <ProfileLayout signOut={signOut}>
                <Outlet context={user}/>
            </ProfileLayout>
            <Toaster />
        </div>
    );
}

export default  withAuthenticator(DoctorInfo)