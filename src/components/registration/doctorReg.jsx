import React from 'react'
import './patientReg.css'

function registerDoctor ({user}) {

const username = user.username

const register = () => {
        const firstname = document.getElementById('firstname').value
        document.getElementById('firstname').value = ''
        const lastname = document.getElementById('lastname').value
        document.getElementById('lastname').value = ''
        const staffid = document.getElementById('staffid').value
        document.getElementById('staffid').value = ''
        const clinic = document.getElementById('clinic').value
        document.getElementById('clinic').value = ''
        const specialization = document.getElementById('specialization').value
        document.getElementById('specialization').value = ''
        const email = document.getElementById('email').value
        document.getElementById('email').value = ''
        const phoneNumber = document.getElementById('phoneNumber').value
        document.getElementById('phoneNumber').value = ''

        const doctor = {
            firstname: firstname,
            lastname: lastname,
            staffid: staffid,
            clinic: clinic,
            specialization: specialization,
            email: email,
            phoneNumber: phoneNumber
        }

        // Post to the server
        console.log(doctor)
}

    return (
        <div id = 'outer-box'>
            <div id = 'inner-box'>
                <div key='firstname' className='field-div'>
                    <label>First Name:</label>
                    <input type='text' id='firstname' placeholder='Enter First Name'/>
                </div>
                <div key='lastname' className='field-div'>
                    <label>Last Name:</label>
                    <input type='text' id='lastname' placeholder='Enter Last Name'/>
                </div>
                <div key='staffid' className='field-div'>
                    <label>Staff ID:</label>
                    <input type='text' id='staffid' placeholder='Enter Staff ID'/>
                </div>
                <div key='clinic' className='field-div'>
                    <label>Clinic:</label>
                    <input type='text' id='clinic' placeholder='Enter Clinic'/>
                </div>
                <div key='specialization' className='field-div'>
                    <label>Specialization:</label>
                    <input type='text' id='specialization' placeholder='Enter Specialization'/>
                </div>
                <div key='email' className='field-div'>
                    <label>Email:</label>
                    <input type='text' id='email' placeholder='Enter Email'/>
                </div>
                <div key='phonenumber' className='field-div'>
                    <label>Phone Number:</label>
                    <input type='text' id='phoneNumber' placeholder='Enter Phone Number'/>
                </div>
                <div key='submit' className='field-div'>
                    <button id='submit-button' onClick={register}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default registerDoctor