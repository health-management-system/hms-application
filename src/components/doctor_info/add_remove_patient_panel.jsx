import { useState } from 'react'
import './add_remove_patient_panel.css'

export default function add_remove_patient_panel({}) {
    
    const addPatient = () => {
        console.log('Added patient ' + document.getElementById('input-field').value)
        document.getElementById('input-field').value = ""
    }

    const removePatient = () => {
        console.log('Removed patient ' + document.getElementById('input-field').value)
        document.getElementById('input-field').value = ""
    }
    
    return (
        <div id='outer-box'>
            <div id='inner-box'>
                <form>
                    <label id='patient-id-label'>
                        Patient Health I.D
                    </label>
                    <input type='text' id='input-field'></input>
                </form>
                <button id='add-button' onClick={addPatient}>Add</button>
                <button id='remove-button' onClick={removePatient}>Remove</button>
            </div>
        </div>
    )
}
