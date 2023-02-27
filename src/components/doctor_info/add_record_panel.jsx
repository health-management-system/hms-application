import React from 'react'
import { useState } from 'react'
import './add_record_panel.css'

function AddRecordPanel ({user = {}}) {

    const postRecord = () => {
        let record = {
            patient: document.getElementById('patient-input').value,
            subject: document.getElementById('subject-input').value,
            log: document.getElementById('log-input').value
        }
        console.log('Doctor "' + user.username + '" has posted the following record:\n' + JSON.stringify(record))
        document.getElementById('patient-input').value = ""
        document.getElementById('subject-input').value = ""
        document.getElementById('log-input').value = ""
    }

    return (
        <div className='outer-box'>
            <div className='inner-box'>
                <form>
                    <div className="add-record-div">
                        <label className='add-record-label' id='patient-label'>Patient</label>
                        <input type='text' className='add-record-input' id='patient-input' placeholder='Enter a Patients Username' />
                    </div>
                    <div className="add-record-div">
                        <label className='add-record-label' id='subject-label'>Subject</label>
                        <input type='text' className='add-record-input' id='subject-input' placeholder='Enter a Subject'></input>
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