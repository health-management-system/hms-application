import { useState } from 'react'
import './doctor_info.css'

export default function doctorInfo({ doctorInfo = {} }) {
  const [info, setInfo] = useState(doctorInfo)

  return (
    <div id='outer-box'>
        <div id='inner-box-info'>
            <ul>
                <li><label id='first-name-label'>First Name:</label><span id='first-name'>{info.firstName}</span></li>
                <li><label id='last-name-label'>Last Name:</label><span id='last-name'>{info.lastName}</span></li>
                <li><label id='staff-id-label'>Staff ID:</label><span id='staff-id'>{info.staffID}</span></li>
                <li><label id='clinic-label'>Clinic(s):</label><span id='clinic'>{info.clinic}</span></li>
                <li><label id='specialization-label'>Specialization:</label><span id='specialization'>{info.specilaization}</span></li>
                <li><label id='email-label'>Email:</label><span id='email'>{info.email}</span></li>
                <li><label id='phone-number-label'>Phone Number:</label><span id='phone-number'>{info.phoneNumber}</span></li>
            </ul>
        </div>
    </div>
  )
}