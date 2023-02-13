import { useState } from "react";
import PaginationNavigator from '../components/PatientInfo/PaginationNavigator';
import {
    PatientHistoryTable,
    PatientRecords,
} from "../components/PatientInfo/PatientHistoryTable";
import ProfileLayout from "../components/layouts/ProfileLayout";
import Subtitle from "../components/shared/subtitle";

const patientRecords: PatientRecords = [
    {
        clinic: "Hope Medicals",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Michael Chris",
        subject: "SevereMigrains",
    },
    {
        clinic: "Children Smiles",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Timothy Patrick",
        subject: "Brain Tumors",
    },
    {
        clinic: "TMed Clinic",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Tyler Richard",
        subject: "Bad Kidney",
    },
    {
        clinic: "Bays Dentals",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Simeon Ray",
        subject: "Tiredness",
    },
];

function PatientInfo() {
    const [patientHistory, setPatientHistory] =
        useState<PatientRecords>(patientRecords);
    const [isLoadingPH, setIsLoadingPH] = useState<boolean>(true);

    return (
        <div className="w-full min-h-screen">
            <ProfileLayout>
                <div className="md:px-20 px-10 py-10">
                    <div className="flex w-full justify-between items-center mb-5">
                        {/* Health record title */}
                        <Subtitle title="Health Records:" />
                        {/* Paginator */}
                        <PaginationNavigator />
                    </div>
                    <PatientHistoryTable
                        isLoadingHistory={false}
                        history={patientHistory}
                        errorLoadingHistory={false}
                    />
                </div>
            </ProfileLayout>
        </div>
    );
}


export default PatientInfo;
