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
    <div className='outer-box'>
        <div className='inner-box'>
          <ul className="view-record-panel">
            <li className="view-record-list-item">
              <label className="view-record-label">Doctor Name: </label> <span className="view-record-span">{props.record.doctorName}</span>
              </li>
            <li className="view-record-list-item">
              <label className="view-record-label">Patient Name: </label> <span className="view-record-span">{props.record.PatientName}</span>
              </li>
            <li className="view-record-list-item">
              <label className="view-record-label">Clinic: </label> <span className="view-record-span">{props.record.clinic}</span>
              </li>
            <li className="view-record-list-item">
              <label className="view-record-label">Subject: </label> <span className="view-record-span">{props.record.subject}</span>
              </li>
            <li className="view-record-list-item">
              <label className="view-record-label">Date: </label> <span className="view-record-span">{props.record.date}</span>
              </li>
          </ul>
          <div className="view-record-panel">
            <label className="view-record-label">Log: </label>
            <article className="record-log-article">
              {props.record.log}
            </article>
          </div>
        </div>
    </div>
  )
}

export default patientRecord;