import React, { useState } from "react";
import "./patient_record.css";
export type recordType={
    subject:string;
    doctorName:string;
    PatientName:string;
    date:string;
    log:string;
    clinic:string;
}

function patientRecord(props :{record:recordType}) {
  return (
    <div className='outer-box rounded-md'>
        <div className='inner-box rounded-md'>
          <ul className="view-record-panel rounded-md">
            <li className="view-record-list-item rounded-md">
              <label className="view-record-label">Doctor Name: </label> <span className="view-record-span">{props.record.doctorName}</span>
              </li>
            <li className="view-record-list-item rounded-md">
              <label className="view-record-label">Patient Name: </label> <span className="view-record-span">{props.record.PatientName}</span>
              </li>
            <li className="view-record-list-item rounded-md">
              <label className="view-record-label">Clinic: </label> <span className="view-record-span">{props.record.clinic}</span>
              </li>
            <li className="view-record-list-item rounded-md">
              <label className="view-record-label">Subject: </label> <span className="view-record-span">{props.record.subject}</span>
              </li>
            <li className="view-record-list-item rounded-md">
              <label className="view-record-label">Date: </label> <span className="view-record-span">{props.record.date}</span>
            </li>
            <li className="view-record-log-li rounded-md">
              <div className="view-record-log-label">Log:</div>
              <article className="record-log-article rounded-md">
                {props.record.log}
              </article>
            </li>
          </ul>
          <div className="view-record-panel rounded-md">
            
          </div>
        </div>
    </div>
  )
}

export default patientRecord;