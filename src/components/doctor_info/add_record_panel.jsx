import { withAuthenticator } from '@aws-amplify/ui-react';
import './add_record_panel.css'

function AddRecordPanel ({user, patientList = []}) {

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
        <div id='outer-box'>
            <div id='inner-box'>
                <form>
                    <div className="form-div">
                        <label id='patient-label'>Patient</label>
                        <select id='patient-select' defaultValue={'default'}>
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

export default withAuthenticator(AddRecordPanel)