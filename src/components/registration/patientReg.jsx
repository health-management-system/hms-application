import React from 'react'
import { useState, useEffect, Dispatch,SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { patientRequests } from '../../utils/requests/patient';
import { requestConfig } from '../../utils/requests/requestConfig';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import toast from 'react-hot-toast';
import EmailValidator from 'email-validator'
import {phone} from 'phone';
import './registration.css'

function RegisterPatient ({user, userInfo}) {

    const username = user.username
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [postalcode, setPostalCode] = useState("")
    const [healthCardNumber, setHealthCardNumber] = useState("")
    

    const onchange = (e, setState) => {
        setState(e.target.value)
    }

    useEffect(()=>{
        if(!userInfo) return
        setFirstname(userInfo.firstname || "")
        setLastname(userInfo.lastname || "")
        setDateOfBirth(userInfo.dateofbirth || "")
        setEmail(userInfo.email || "")
        setPhoneNumber(userInfo.phonenumber || "")
        setAddress(userInfo.address || "")
        setPostalCode(userInfo.postalcode || "")
        setHealthCardNumber(userInfo.healthcardnumber || "")
        console.log(userInfo)
    },[userInfo])
    
    const register = async() => {
       
        setLoading(true)

        // Validate Email
        const isValidEmail = EmailValidator.validate(email)
        // Validate Phone Number (sets country to Canada)
        const isValidPhoneNumber = phone(phonenumber, {country: 'CA'}).isValid; 
        // Validate Date
        const isValidDate = true // Change true assignment

        if(isValidEmail && isValidPhoneNumber && isValidDate) {
            const patient = {
                userid: username,
                firstname: firstname,
                lastname: lastname,
                dateofbirth: dateOfBirth,
                email: email,
                phonenumber: phonenumber,
                address: address,
                postalcode: postalcode,
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
            }
            setLoading(false)
            navigate('/patientinfo')
        } else {
            let toastMessage = 'Invalid: '
            if(!isValidDate) {
                toastMessage += '\'Date of Birth\' '
            } else if(!isValidEmail) {
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
            <form id='patient-update-info-form'>
                <div key='firstname' className='registration-div'>
                    <label className='registration-label'>First Name:</label>
                    <input className='registration-input rounded-md' type='text' id='firstname' placeholder='Enter First Name' value ={firstname} onChange={(e)=>onchange(e, setFirstname)}/>
                </div>
                <div key='lastname' className='registration-div'>
                    <label className='registration-label'>Last Name:</label>
                    <input className='registration-input rounded-md' type='text' id='lastname' placeholder='Enter Last Name' value ={lastname}onChange={(e)=>onchange(e, setLastname)}/>
                </div>
                <div key='dob' className='registration-div'>
                    <label className='registration-label'>Date of Birth:</label>
                    <input className='registration-input rounded-md' type='text' id='dateOfBirth' placeholder='Enter Date of Birth (ex: mm/dd/yyyy)' value={dateOfBirth}onChange={(e)=>onchange(e, setDateOfBirth)}/>
                </div>
                <div key='email' className='registration-div'>
                    <label className='registration-label'>Email:</label>
                    <input className='registration-input rounded-md' type='text' id='email' placeholder='Enter Email' value={email} onChange={(e)=>onchange(e, setEmail)}/>
                </div>
                <div key='phonenumber' className='registration-div'>
                    <label className='registration-label'>Phone Number:</label>
                    <input className='registration-input rounded-md' type='text' id='phoneNumber' placeholder='Enter Phone Number' value={phonenumber} onChange={(e)=>onchange(e, setPhoneNumber)}/>
                </div>
                <div key='address' className='registration-div'>
                    <label className='registration-label'>Address</label>
                    <input className='registration-input rounded-md' type='text' id='address' placeholder='Enter Address' value={address} onChange={(e)=>onchange(e, setAddress)}/>
                </div>
                <div key='postalcode' className='registration-div'>
                    <label className='registration-label'>Postal Code:</label>
                    <input className='registration-input rounded-md' type='text' id='postalCode' placeholder='Enter Postal Code' value={postalcode} onChange={(e)=>onchange(e, setPostalCode)}/>
                </div>
                <div key='healthcard' className='registration-div'>
                    <label className='registration-label'>Health Card Number:</label>
                    <input className='registration-input rounded-md' type='text' id='healthCardNumber' placeholder='Enter Health Card Number' value={healthCardNumber} onChange={(e)=>onchange(e, setHealthCardNumber)}/>
                </div>
            </form>
            <button className='registration-button bg-priCol hover:bg-priHover text-white font-bold rounded-md' id='submit-button' onClick={register} disabled={loading}>
                {loading ? <div className='flex space-x-3 justify-center items-center'><AiOutlineLoading3Quarters className="animate-spin text-white" /><h1>Loading</h1></div>:<span>Submit</span>}
                
                
                </button>
        </div>
    )
}

export default RegisterPatient