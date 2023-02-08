import React from 'react'
import ProfileLayout from '../components/layouts/ProfileLayout'
import Subtitle from '../components/shared/subtitle'
import DoctorInfo from '../components/doctor_info/doctor_info'
import AddPatient from '../components/doctor_info/add_remove_patient_panel'
import AddRecord from '../components/doctor_info/add_record_panel'

const doctorInfo = {
  firstName: 'John',
  lastName: 'Smith',
  staffID: '305409345s',
  clinic: 'Waterloo Central',
  specilaization: 'Eye Doctor',
  email: 'jsmith@gmail.com',
  phoneNumber: '517-225-3833'
}

function Doctorinfo() {
  return (
    <div className='w-full min-h-screen'>
        <ProfileLayout>
            <Subtitle title='General Info:' />
            <DoctorInfo doctorInfo={doctorInfo}/>
            <Subtitle title='Add/Remove Patient:' />
            <AddPatient />
            <Subtitle title='Add Record:' />
            <AddRecord />
        </ProfileLayout>
    </div>
  )
}

export default Doctorinfo
