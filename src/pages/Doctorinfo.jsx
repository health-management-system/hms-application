import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import ProfileLayout from '../components/layouts/ProfileLayout'
import Subtitle from '../components/shared/subtitle'
import DoctorInfo from '../components/doctor_info/doctor_info'
import AddPatient from '../components/doctor_info/add_remove_patient_panel'
import AddRecord from '../components/doctor_info/add_record_panel'

// Should request response from server using user.username
// An example respose should be of the format:
const res = {
  doctorInfo: {
    firstName: 'John',
    lastName: 'Smith',
    staffID: '1234567890',
    clinic: 'Waterloo Central',
    specialization: 'Eye Doctor',
    email: 'jsmith@gmail.com',
    phoneNumber: '517-223-3456'
  },
  patientList: [{key: 'Maximus Valencia', value: 'Maximus Valencia'}, {key: 'Ava-Rose Shah', value: 'Ava-Rose Shah'}, 
                {key: 'Abbey Bloggs', value: 'Abbey Bloggs'}, {key: 'Margaret Dunlap', value: 'Margaret Dunlap'},
                {key: 'Jaden Rowland', value: 'Jaden Rowland'}, {key: 'Yasmin James', value: 'Yasmin James'},
                {key: 'Simeon Hall', value: 'Simeon Hall'}, {key: 'Dalton Benton', value: 'Dalton Benton'},
                {key: 'Hassan Cameron', value: 'Hassan Cameron'}, {key: 'Brenda Potter', value: 'Brenda Potter'},
                {key: 'Kaya Meadows', value: 'Kaya Meadows'}, {key: 'Bailey Holden', value: 'Bailey Holden'},
                {key: 'Larissa Valentine', value: 'Larissa Valentine'}
              ]
}

// Reponse from the server is used to intialize react components
function Doctorinfo({ signOut, user}) {
  return (
    <div className='w-full min-h-screen'>
        <ProfileLayout>
            <Subtitle title='General Info:' />
            <DoctorInfo doctorInfo={res.doctorInfo}/>
            <Subtitle title='Add/Remove Patient:' />
            <AddPatient user={user}/>
            <Subtitle title='Add Record:' />
            <AddRecord user={user} patientList={res.patientList}/>
        </ProfileLayout>
    </div>
  )
}

export default  withAuthenticator(Doctorinfo)
