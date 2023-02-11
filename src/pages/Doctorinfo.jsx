import React from 'react'
import axios, * as others from 'axios';
import {useState, useEffect} from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import ProfileLayout from '../components/layouts/ProfileLayout'
import Subtitle from '../components/shared/subtitle'
import DoctorInfo from '../components/shared/user_info'
import AddPatient from '../components/doctor_info/add_remove_patient_panel'
import AddRecord from '../components/doctor_info/add_record_panel'
import { Lambda } from 'aws-sdk';

// Should request response from server using user.username
// An example respose should be of the format:
// const res = {
//   doctorInfo: [
//     {label: 'FirstName:', value: 'John'},
//     {label:'LastName:', value: 'Smith'},
//     {label:'StaffID:', value: '1234567890'},
//     {label:'Clinic:', value: 'Waterloo Central'},
//     {label:'Specialization:', value: 'Eye Doctor'},
//     {label:'Email:', value: 'jsmith@gmail.com'},
//     {label:'PhoneNumber:', value: '517-223-3456'}
//   ],
//   patientList: [{key: 'Maximus Valencia', value: 'Maximus Valencia'}, {key: 'Ava-Rose Shah', value: 'Ava-Rose Shah'}, 
//                 {key: 'Abbey Bloggs', value: 'Abbey Bloggs'}, {key: 'Margaret Dunlap', value: 'Margaret Dunlap'},
//                 {key: 'Jaden Rowland', value: 'Jaden Rowland'}, {key: 'Yasmin James', value: 'Yasmin James'},
//                 {key: 'Simeon Hall', value: 'Simeon Hall'}, {key: 'Dalton Benton', value: 'Dalton Benton'},
//                 {key: 'Hassan Cameron', value: 'Hassan Cameron'}, {key: 'Brenda Potter', value: 'Brenda Potter'},
//                 {key: 'Kaya Meadows', value: 'Kaya Meadows'}, {key: 'Bailey Holden', value: 'Bailey Holden'},
//                 {key: 'Larissa Valentine', value: 'Larissa Valentine'}
//               ]
// }

// Reponse from the server is used to intialize react components
function Doctorinfo({ signOut, user}) {
  const [doctorInfo, setDoctorInfo] = useState('')
  const [catUrl, setCatUrl] = useState('');
  const [error, setError] = useState(false);
  const [state, setState] = useState('');

  // New Axios Call to AWS:
  useEffect(() => {
    setState('loading...')
    const params = '?username=' + user.username
    axios
      .get('https://1nof9m2hql.execute-api.us-east-1.amazonaws.com/default/statusCheck' + params)
      .then((res) => {
        console.log(res);
        setDoctorInfo(res.data)
        setState('success');
        setCatUrl('https://cataas.com' + res.data.url);
      })
      .catch((err) => {
        console.error('Error:', err);
        setState('error');
        setError(err);
    })
  }, [user]);

  if(state === 'error') {
    return (
      <h1>Axios Error</h1>
    )
  }

  return (
    <div className='w-full min-h-screen'>
        <ProfileLayout>
            <Subtitle title='General Info:' />
            <DoctorInfo doctorInfo={doctorInfo.doctorInfo}/>
            <Subtitle title='Add/Remove Patient:' />
            <AddPatient user={user}/>
            <Subtitle title='Add Record:' />
            <AddRecord user={user} patientList={doctorInfo.patientList}/>
        </ProfileLayout>
    </div>
  )
}

export default  withAuthenticator(Doctorinfo)
