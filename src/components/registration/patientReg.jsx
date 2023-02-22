import React from 'react'
import './registration.css'

function registerPatient ({user}) {

    const username = user.username
    console.log(username)

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
            <div className = 'outer-box'>
                <div className = 'inner-box'>
                    <div key='firstname' className='registration-div'>
                        <label className='registration-label'>First Name:</label>
                        <input className='registration-input' type='text' id='firstname' placeholder='Enter First Name'/>
                    </div>
                    <div key='lastname' className='registration-div'>
                        <label className='registration-label'>Last Name:</label>
                        <input className='registration-input' type='text' id='lastname' placeholder='Enter Last Name'/>
                    </div>
                    <div key='dob' className='registration-div'>
                        <label className='registration-label'>Date of Birth:</label>
                        <input className='registration-input' type='text' id='dateOfBirth' placeholder='Enter Date of Birth'/>
                    </div>
                    <div key='email' className='registration-div'>
                        <label className='registration-label'>Email:</label>
                        <input className='registration-input' type='text' id='email' placeholder='Enter Email'/>
                    </div>
                    <div key='phonenumber' className='registration-div'>
                        <label className='registration-label'>Phone Number:</label>
                        <input className='registration-input' type='text' id='phoneNumber' placeholder='Enter Phone Number'/>
                    </div>
                    <div key='address' className='registration-div'>
                        <label className='registration-label'>Address</label>
                        <input className='registration-input' type='text' id='address' placeholder='Enter Address'/>
                    </div>
                    <div key='postalcode' className='registration-div'>
                        <label className='registration-label'>Postal Code:</label>
                        <input className='registration-input' type='text' id='postalCode' placeholder='Enter Postal Code'/>
                    </div>
                    <div key='healthcard' className='registration-div'>
                        <label className='registration-label'>Health Card Number:</label>
                        <input className='registration-input' type='text' id='healthCardNumber' placeholder='Enter Health Card Number'/>
                    </div>
                    <div key='submit' className='registration-div'>
                        <button className='registration-button' id='submit-button' onClick={register}>Submit</button>
                    </div>
                </div>
            </div>
    )
}

export default registerPatient