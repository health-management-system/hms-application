import React from 'react'
import { useState } from 'react'
import './add_remove_patient_panel.css'

function add_remove_patient_panel({user = {}}) {
    
    const addPatient = () => {
        console.log('Doctor "' + user.username + '" has added patient with ID "' + document.getElementById('add-remove-patient-input').value + '"')
        document.getElementById('add-remove-patient-input').value = ""
    }

    const removePatient = () => {
        console.log('Doctor "' + user.username + '" has removed patient with ID "' + document.getElementById('add-remove-patient-input').value + '"')
        document.getElementById('add-remove-patient-input').value = ""
    }
    
    return (
        <div className='outer-box'>
            <div className='inner-box'>
                <label className='add-remove-patient-id-label'>
                    Patient Health I.D
                </label>
                <input type='text' className='add-remove-patient-id-input' id='add-remove-patient-input' placeholder='Enter Patient Username'></input>
                <button className='add-patient-button' id='add-button' onClick={addPatient}>Add</button>
                <button className='remove-patient-button' id='remove-button' onClick={removePatient}>Remove</button>
            </div>
        </div>
    )
}

export default add_remove_patient_panel