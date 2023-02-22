import React from 'react'
import { useState } from 'react'
import './add_record_panel.css'

function AddRecordPanel ({user = {}, patientList = []}) {

    const postRecord = () => {
        let record = {
            patient: document.getElementById('patient-select').value,
            subject: document.getElementById('subject-input').value,
            log: document.getElementById('log-input').value
        }
        console.log('Doctor "' + user.username + '" has posted the following record:\n' + JSON.stringify(record))
        document.getElementById('patient-select').value = "default"
        document.getElementById('subject-input').value = ""
        document.getElementById('log-input').value = ""
    }

    return (
        <div className='outer-box'>
            <div className='inner-box'>
                <form>
                    <div className="add-record-div">
                        <label className='add-record-label' id='patient-label'>Patient</label>
                        <select className='add-record-select' id='patient-select' defaultValue={'default'}>
                            <option  disabled label='Choose a patient' value='default' key='0'></option>
                            {patientList.map((patientList) => {
                                return (
                                    <option key={patientList.key} value={patientList.value}>
                                        {patientList.key}
                                    </option>
                                )
                            })};
                        </select>
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