import React from 'react'
import { useState } from 'react'
import './doctor_info.css'
import pfp from './user_pic.png'

export default function doctorInfo({ doctorInfo = {} }) {
  return (
    <div id='outer-box'>
        <div id='inner-box-info'>
          <ul>
            <li><label id='first-name-label'>First Name:</label><span id='first-name'>{doctorInfo.firstName}</span></li>
            <li><label id='last-name-label'>Last Name:</label><span id='last-name'>{doctorInfo.lastName}</span></li>
            <li><label id='staff-id-label'>Staff ID:</label><span id='staff-id'>{doctorInfo.staffID}</span></li>
            <li><label id='clinic-label'>Clinic(s):</label><span id='clinic'>{doctorInfo.clinic}</span></li>
            <li><label id='specialization-label'>Specialization:</label><span id='specialization'>{doctorInfo.specilaization}</span></li>
            <li><label id='email-label'>Email:</label><span id='email'>{doctorInfo.email}</span></li>
            <li><label id='phone-number-label'>Phone Number:</label><span id='phone-number'>{doctorInfo.phoneNumber}</span> </li>
          </ul>
          
        </div>
    </div>
  )
}