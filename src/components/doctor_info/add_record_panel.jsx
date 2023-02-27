import React from 'react'
import { useState } from 'react'
import { doctorRequests } from '../../utils/requests/doctor';
import { requestConfig } from '../../utils/requests/requestConfig';
import toast from 'react-hot-toast';
import './add_record_panel.css'

function AddRecordPanel ({user = {}}) {

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
        }

    }

    return (
        <div className='outer-box'>
            <div className='inner-box'>
                <form id='post-record-form'>
                    <div className="add-record-div">
                        <label className='add-record-label' id='patient-label'>Patient</label>
                        <input type='text' className='add-record-input' id='patient-input' placeholder='Enter a Patients Username' />
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='subject-label'>Subject</label>
                        <input type='text' className='add-record-input' id='subject-input' placeholder='Enter a Subject'></input>
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='subject-label'>Date</label>
                        <input type='text' className='add-record-input' id='date-input' placeholder='Enter a date'></input>
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='log-label'>Log</label>
                        <textarea type='text' className='add-record-textarea' id='log-input'></textarea>
                    </div>
                </form>
                <div className='add-record-button-div' id='button-div'>
                    <button className='add-record-button' onClick={postRecord}>Post</button>
                </div>
            </div>
        </div>
    )

}

export default AddRecordPanel