import React from 'react'
import Subtitle from '../../components/shared/subtitle'
import DoctorInfo from '../../components/shared/user_info'
import AddPatient from '../../components/doctor_info/add_remove_patient_panel'
import AddRecord from '../../components/doctor_info/add_record_panel'
import { useOutletContext } from 'react-router-dom'

// Should request response from server using user.username
// An example respose should be of the format:
const res = {
  doctorInfo: [
    {label: 'First Name:', value: 'John'},
    {label:'Last Name:', value: 'Smith'},
    {label:'Staff ID:', value: '1234567890'},
    {label:'Clinic:', value: 'Waterloo Central'},
    {label:'Specialization:', value: 'Eye Doctor'},
    {label:'Email:', value: 'jsmith@gmail.com'},
    {label:'Phone Number:', value: '517-223-3456'}
  ],
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
function Doctorinfo() {
    const user = useOutletContext();
    return (
        <div className='w-full min-h-screen'>
            <Subtitle title='General Info:' />
            <DoctorInfo doctorInfo={res.doctorInfo}/>
            <Subtitle title='Add/Remove Patient:' />
            <AddPatient user={user}/>
            <Subtitle title='Add Record:' />
            <AddRecord user={user} patientList={res.patientList}/>
        </div>
    )
}

export default  Doctorinfo
