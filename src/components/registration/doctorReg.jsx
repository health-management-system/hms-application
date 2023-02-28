import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doctorRequests } from '../../utils/requests/doctor';
import { requestConfig } from '../../utils/requests/requestConfig';
import toast from 'react-hot-toast';
import './registration.css'

function RegisterDoctor ({user}) {

    const username = user.username
    const navigate = useNavigate()
    const [isUpdated, setUpdated] = useState(false)
    

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

        const result = await doctorRequests(requestConfig).registerDoctor(doctor)
        console.log(result)

        if(result.statusCode == 201) {
            toast('Info Updated!', {
                id: "Hello",
                duration: 5000,
                icon: '🔔',
                style: {
                  width: '1200em',
                  height: '3em',
                  fontSize: '1.2em',
                }
              })
        }
        setUpdated(true)
        console.log(isUpdated)
    }

    if(isUpdated) {
        navigate('/doctorinfo')
    }

    return (
            // <div className = 'outer-box rounded-md'>
                <div className = 'inner-box rounded-md'>
                    <form id='doctor-update-info-form' className='registration-form'>
                        <div key='firstname' className='registration-div'>
                            <label className='registration-label'>First Name:</label>
                            <input className='registration-input rounded-md' type='text' id='firstname' placeholder='Enter First Name'/>
                        </div>
                        <div key='lastname' className='registration-div'>
                            <label className='registration-label'>Last Name:</label>
                            <input className='registration-input rounded-md' type='text' id='lastname' placeholder='Enter Last Name'/>
                        </div>
                        <div key='staffid' className='registration-div'>
                            <label className='registration-label'>Staff ID:</label>
                            <input className='registration-input  rounded-md' type='text' id='staffid' placeholder='Enter Staff ID'/>
                        </div>
                        <div key='clinic' className='registration-div'>
                            <label className='registration-label'>Clinic:</label>
                            <input className='registration-input  rounded-md' type='text' id='clinic' placeholder='Enter Clinic'/>
                        </div>
                        <div key='specialization' className='registration-div'>
                            <label className='registration-label'>Specialization:</label>
                            <input className='registration-input rounded-md' type='text' id='specialization' placeholder='Enter Specialization'/>
                        </div>
                        <div key='email' className='registration-div'>
                            <label className='registration-label'>Email:</label>
                            <input className='registration-input rounded-md' type='text' id='email' placeholder='Enter Email'/>
                        </div>
                        <div key='phonenumber' className='registration-div'>
                            <label className='registration-label'>Phone Number:</label>
                            <input className='registration-input rounded-md' type='text' id='phoneNumber' placeholder='Enter Phone Number'/>
                        </div>
                    </form>
                    <div key='submit' className='registration-div'>
                        <button className='registration-button bg-priCol hover:bg-priHover text-white font-bold py-3 px-8 rounded-md my-6' id='submit-button' onClick={register}>Submit</button>
                    </div>
                </div>
            // </div>
    )
}

export default RegisterDoctor