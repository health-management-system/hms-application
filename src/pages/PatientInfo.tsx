import { useState } from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import PaginationNavigator from '../components/PatientInfo/PaginationNavigator';
import {
    PatientHistoryTable,
    PatientRecords,
} from "../components/PatientInfo/PatientHistoryTable";
import ProfileLayout from "../components/layouts/ProfileLayout";
import Subtitle from "../components/shared/subtitle";
import { Outlet } from "react-router";



function PatientInfo() {
   

    return (
        <div className="w-full min-h-screen">
            <ProfileLayout>
                <Outlet/>
            </ProfileLayout>
        </div>
    );
}



export default  withAuthenticator(PatientInfo)