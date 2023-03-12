import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { doctorRequests } from '../../utils/requests/doctor';
import { requestConfig } from '../../utils/requests/requestConfig';
import toast from 'react-hot-toast';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import EmailValidator from 'email-validator'
import {phone} from 'phone';
import './registration.css'

function RegisterDoctor ({user, userInfo}) {

    const username = user.username
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [staffid, setStaffID] = useState("")
    const [clinic, setClinic] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    
    const onchange = (e, setState) => {
        setState(e.target.value)
    }

    useEffect(()=>{
        if(!userInfo) return
        setFirstname(userInfo.firstname || "")
        setLastname(userInfo.lastname || "")
        setStaffID(userInfo.staffID || "")
        setClinic(userInfo.clinic || "")
        setSpecialization(userInfo.specialization || "")
        setEmail(userInfo.email || "")
        setPhoneNumber(userInfo.phonenumber || "")
        console.log(userInfo)
    },[userInfo])

    const register = async() => {

        setLoading(true)

        // Validate Email
        const isValidEmail = EmailValidator.validate(email)
        // Validate Phone Number
        const isValidPhoneNumber = phone(phonenumber, {country: 'CA'}).isValid;

        if(isValidEmail && isValidPhoneNumber) {
            const doctor = {
            doctorid: username,
            firstname: firstname,
            lastname: lastname,
            staffID: staffid,
            clinic: clinic,
            specialization: specialization,
            email: email,
            phonenumber: phonenumber
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
            setLoading(false)
            navigate('/doctorinfo')
        } else {
            let toastMessage = 'Invalid: '
            if(!isValidEmail) {
                toastMessage += '\'Email\' '
            } else if(!isValidPhoneNumber) {
                toastMessage += '\'Phone Number\' '
            }
            toast(toastMessage, {
                id: "Hello",
                duration: 5000,
                icon: '❌',
                style: {
                  width: '1200em',
                  height: '3em',
                  fontSize: '1.2em',
                }
            })
            setLoading(false)
        }
    }



    return (
        <div className = 'inner-box rounded-md'>
            <form id='doctor-update-info-form'>
                <div key='firstname' className='registration-div'>
                    <label className='registration-label'>First Name:</label>
                    <input className='registration-input rounded-md' type='text' id='firstname' placeholder='Enter First Name' value={firstname} onChange={(e)=>onchange(e, setFirstname)}/>
                </div>
                <div key='lastname' className='registration-div'>
                    <label className='registration-label'>Last Name:</label>
                    <input className='registration-input rounded-md' type='text' id='lastname' placeholder='Enter Last Name'value={lastname} onChange={(e)=>onchange(e, setLastname)}/>
                </div>
                <div key='staffid' className='registration-div'>
                    <label className='registration-label'>Staff ID:</label>
                    <input className='registration-input rounded-md' type='text' id='staffid' placeholder='Enter Staff ID'value={staffid} onChange={(e)=>onchange(e, setStaffID)}/>
                </div>
                <div key='clinic' className='registration-div'>
                    <label className='registration-label'>Clinic:</label>
                    <input className='registration-input rounded-md' type='text' id='clinic' placeholder='Enter Clinic'value={clinic} onChange={(e)=>onchange(e, setClinic)}/>
                </div>
                <div key='specialization' className='registration-div'>
                    <label className='registration-label'>Specialization:</label>
                    <input className='registration-input rounded-md' type='text' id='specialization' placeholder='Enter Specialization'value={specialization} onChange={(e)=>onchange(e, setSpecialization)}/>
                </div>
                <div key='email' className='registration-div'>
                    <label className='registration-label'>Email:</label>
                    <input className='registration-input rounded-md' type='text' id='email' placeholder='Enter Email'value={email} onChange={(e)=>onchange(e, setEmail)}/>
                </div>
                <div key='phonenumber' className='registration-div'>
                    <label className='registration-label'>Phone Number:</label>
                    <input className='registration-input rounded-md' type='text' id='phoneNumber' placeholder='Enter Phone Number'value={phonenumber} onChange={(e)=>onchange(e, setPhoneNumber)}/>
                </div>
            </form>
            <button className='registration-button bg-priCol hover:bg-priHover text-white font-bold rounded-md' id='submit-button' disabled={loading} onClick={register}>
            {loading ? <div className='flex space-x-3 justify-center items-center'><AiOutlineLoading3Quarters className="animate-spin text-white" /><h1>Loading</h1></div>:<span>Submit</span>}
                </button>
        </div>
    )
}

export default RegisterDoctor