import React from 'react'
import './registration.css'

function registerDoctor ({user}) {

    const username = user.username
    console.log(username)

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
                    <div key='staffid' className='registration-div'>
                        <label className='registration-label'>Staff ID:</label>
                        <input className='registration-input' type='text' id='staffid' placeholder='Enter Staff ID'/>
                    </div>
                    <div key='clinic' className='registration-div'>
                        <label className='registration-label'>Clinic:</label>
                        <input className='registration-input' type='text' id='clinic' placeholder='Enter Clinic'/>
                    </div>
                    <div key='specialization' className='registration-div'>
                        <label className='registration-label'>Specialization:</label>
                        <input className='registration-input' type='text' id='specialization' placeholder='Enter Specialization'/>
                    </div>
                    <div key='email' className='registration-div'>
                        <label className='registration-label'>Email:</label>
                        <input className='registration-input' type='text' id='email' placeholder='Enter Email'/>
                    </div>
                    <div key='phonenumber' className='registration-div'>
                        <label className='registration-label'>Phone Number:</label>
                        <input className='registration-input' type='text' id='phoneNumber' placeholder='Enter Phone Number'/>
                    </div>
                    <div key='submit' className='registration-div'>
                        <button className='registration-button' id='submit-button' onClick={register}>Submit</button>
                    </div>
                </div>
            </div>
    )
}

export default registerDoctor