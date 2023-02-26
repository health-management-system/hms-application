import React from 'react'
import axios from 'axios'
import './registration.css'

function registerDoctor ({user}) {

    const username = user.username

    const register = async() => {
        const firstname = document.getElementById('firstname').value
        const lastname = document.getElementById('lastname').value
        const staffid = document.getElementById('staffid').value
        const clinic = document.getElementById('clinic').value
        const specialization = document.getElementById('specialization').value
        const email = document.getElementById('email').value
        const phoneNumber = document.getElementById('phoneNumber').value

        document.getElementById('doctor-update-info-form').reset()

        const doctor = {
            doctorid: username,
            firstname: firstname,
            lastname: lastname,
            staffID: staffid,
            clinic: clinic,
            specialization: specialization,
            email: email,
            phonenumber: phoneNumber
        }

        await axios.post('https://j4mbz2k3ad.execute-api.us-east-1.amazonaws.com/latest/registerdoctorinfo', doctor)
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)})
    }


    return (
            <div className = 'outer-box'>
                <div className = 'inner-box'>
                    <form id='doctor-update-info-form'>
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
                    </form>
                    <div key='submit' className='registration-div'>
                        <button className='registration-button' id='submit-button' onClick={register}>Submit</button>
                    </div>
                </div>
            </div>
    )
}

export default registerDoctor