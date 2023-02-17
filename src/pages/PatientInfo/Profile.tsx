import React, { useState } from 'react'
import Subtitle from '../../components/shared/subtitle'
import PaginationNavigator from '../../components/PatientInfo/PaginationNavigator'
import { PatientHistoryTable, PatientRecords } from '../../components/PatientInfo/PatientHistoryTable'
import InfoPanel from '../../components/shared/user_info'

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

const patientInfo = [
    {label: 'First Name:', value: 'Brian'},
    {label:'Last Name:', value: 'Smith'},
    {label:'Date of Birth:', value: '1995-09-03'},
    {label:'Email:', value: 'brainsmith@gmail.com'},
    {label:'Address:', value: '8 Ring Rd, Waterloo ON'},
    {label:'Phone Number:', value: '517-733-2895'},
    {label:'Postal Code:', value: 'K6F Y9D'},
    {label:'Health Card No:', value: '78549854985'}
]

function Profile() {
    const [patientHistory, setPatientHistory] =
    useState<PatientRecords>(patientRecords);
const [isLoadingPH, setIsLoadingPH] = useState<boolean>(true);
  return (
    <div className="md:px-20 px-10 py-10">
                    <Subtitle title="General Info:" />
                    <InfoPanel doctorInfo={patientInfo}/>
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
  )
}

export default Profile