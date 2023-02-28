import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { patientRequests } from '../../utils/requests/patient';
import { requestConfig } from '../../utils/requests/requestConfig';
import toast from 'react-hot-toast';
import './registration.css'

function RegisterPatient ({user}) {

    const username = user.username
    const navigate = useNavigate()
    const [isUpdated, setUpdated] = useState(false)

    const register = async() => {
        const firstname = document.getElementById('firstname').value
        const lastname = document.getElementById('lastname').value
        const dateOfBirth = document.getElementById('dateOfBirth').value
        const email = document.getElementById('email').value
        const phoneNumber = document.getElementById('phoneNumber').value
        const address = document.getElementById('address').value
        const postalCode = document.getElementById('postalCode').value
        const healthCardNumber = document.getElementById('healthCardNumber').value

        document.getElementById('patient-update-info-form').reset()

        const patient = {
            userid: username,
            firstname: firstname,
            lastname: lastname,
            dateofbirth: dateOfBirth,
            email: email,
            phonenumber: phoneNumber,
            address: address,
            postalcode: postalCode,
            healthcardnumber: healthCardNumber
        }

        const result = await patientRequests(requestConfig).registerPatient(patient)
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
        } else {
            toast('Something went wrong...' , {
                id: "Hello",
                duration: 5000,
                icon: '❌',
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
            <div className = 'outer-box'>
                <div className = 'inner-box'>
                    <form id='patient-update-info-form'>
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
                    </form>
                    <div key='submit' className='registration-div'>
                        <button className='registration-button' id='submit-button' onClick={register}>Submit</button>
                    </div>
                </div>
            </div>
    )
}

export default RegisterPatient