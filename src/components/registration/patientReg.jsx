import React from 'react'
import './patientReg.css'

function registerPatient () {

const register = () => {
        const firstname = document.getElementById('firstname').value
        document.getElementById('firstname').value = ''
        const lastname = document.getElementById('lastname').value
        document.getElementById('lastname').value = ''
        const dateOfBirth = document.getElementById('dateOfBirth').value
        document.getElementById('dateOfBirth').value = ''
        const email = document.getElementById('email').value
        document.getElementById('email').value = ''
        const phoneNumber = document.getElementById('phoneNumber').value
        document.getElementById('phoneNumber').value = ''
        const address = document.getElementById('address').value
        document.getElementById('phoneNumber').value = ''
        document.getElementById('address').value = ''
        const postalCode = document.getElementById('postalCode').value
        document.getElementById('postalCode').value = ''
        const healthCardNumber = document.getElementById('healthCardNumber').value
        document.getElementById('healthCardNumber').value = ''

        const patient = {
            firstname,
            lastname,
            dateOfBirth,
            email,
            phoneNumber,
            address,
            postalCode,
            healthCardNumber
        }

        // Post to the server
        console.log(patient)
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
                <div key='dob' className='field-div'>
                    <label>Date of Birth:</label>
                    <input type='text' id='dateOfBirth' placeholder='Enter Date of Birth'/>
                </div>
                <div key='email' className='field-div'>
                    <label>Email:</label>
                    <input type='text' id='email' placeholder='Enter Email'/>
                </div>
                <div key='phonenumber' className='field-div'>
                    <label>Phone Number:</label>
                    <input type='text' id='phoneNumber' placeholder='Enter Phone Number'/>
                </div>
                <div key='address' className='field-div'>
                    <label>Address</label>
                    <input type='text' id='address' placeholder='Enter Address'/>
                </div>
                <div key='postalcode' className='field-div'>
                    <label>Postal Code:</label>
                    <input type='text' id='postalCode' placeholder='Enter Postal Code'/>
                </div>
                <div key='healthcard' className='field-div'>
                    <label>Health Card Number:</label>
                    <input type='text' id='healthCardNumber' placeholder='Enter Health Card Number'/>
                </div>
                <div key='submit' className='field-div'>
                    <button id='submit-button' onClick={register}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default registerPatient