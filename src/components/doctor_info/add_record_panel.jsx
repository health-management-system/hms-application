import { useState } from 'react'
import './add_record_panel.css'

export default function AddRecordPanel ({patientList = []}) {
    const [patients, setPatients] = useState(patientList)

    const postRecord = () => {
        let record = {
            patient: document.getElementById('patient-select').value,
            subject: document.getElementById('subject-input').value,
            log: document.getElementById('log-input').value
        }
        console.log('Record to be posted:')
        console.log(record)
        document.getElementById('patient-select').value = "default"
        document.getElementById('subject-input').value = ""
        document.getElementById('log-input').value = ""
    }

    return (
        <div id='outer-box'>
            <div id='inner-box'>
                <form>
                    <div className="form-div">
                        <label id='patient-label'>Patient</label>
                        <select id='patient-select' defaultValue={'default'}>
                            <option  disabled label='Choose a patient' value='default'></option>
                            {patients.map((option) => {
                                return (
                                    <option key={patients.key} value={patients.value}>
                                        {option.key}
                                    </option>
                                )
                            })};
                        </select>
                    </div>
                    <div className="form-div">
                        <label id='subject-label'>Subject</label>
                        <input type='text' id='subject-input'></input>
                    </div>
                    <div className="form-div">
                        <label id='log-label'>Log</label>
                        <textarea type='text' id='log-input'></textarea>
                    </div>
                </form>
                <div id='button-div'>
                    <button onClick={postRecord}>Post</button>
                </div>
            </div>
        </div>
    )

} 