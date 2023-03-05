import React from 'react'
import { useState } from 'react'
import { doctorRequests } from '../../utils/requests/doctor';
import { requestConfig } from '../../utils/requests/requestConfig';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import toast from 'react-hot-toast';
import './add_record_panel.css'

function AddRecordPanel ({user = {}}) {
    const [loading, setLoading] = useState(false)
    const username = user.username

    const postRecord = async() => {
        let record = {
            patientUsername: document.getElementById('patient-input').value,
            doctorUsername: username,
            date: document.getElementById('date-input').value,
            subject: document.getElementById('subject-input').value,
            log: document.getElementById('log-input').value
        }
        document.getElementById('post-record-form').reset()
        setLoading(true)
        let result = await doctorRequests(requestConfig).postRecord(record)
        console.log(result)

        if(result.statusCode == 201) {
            toast('Record Posted!', {
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
        setLoading(false)

    }

    return (
            <div className='inner-box rounded-md'>
                <form id='post-record-form'>
                    <div className="add-record-div">
                        <label className='add-record-label' id='patient-label'>Patient ID:</label>
                        <input type='text' className='add-record-input rounded-md' id='patient-input' placeholder='Enter a Patients Username' />
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='subject-label'>Subject:</label>
                        <input type='text' className='add-record-input rounded-md' id='subject-input' placeholder='Enter a Subject'></input>
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='subject-label'>Date:</label>
                        <input type='text' className='add-record-input rounded-md' id='date-input' placeholder='Enter a Date (ex: mm/dd/yyyy)'></input>
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='log-label'>Log:</label>
                        <textarea type='text' className='add-record-textarea rounded-md' id='log-input'></textarea>
                    </div>
                </form>
                <button className='add-record-button bg-priCol hover:bg-priHover text-white font-bold rounded-md' onClick={postRecord}>
                    {loading ? <div className='flex space-x-3 justify-center items-center'><AiOutlineLoading3Quarters className="animate-spin text-white" /><h1>Loading</h1></div>:<span>Post</span>}
                    </button>
            </div>
    )

}

export default AddRecordPanel