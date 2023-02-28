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
        <label>Doctor Name: </label> <span>{props.record.doctorName}</span>
        <label>Patient Name: </label> <span>{props.record.PatientName}</span>
        <label>Clinic: </label> <span>{props.record.clinic}</span>
        <label>Subject: </label> <span>{props.record.subject}</span>
        <label>Date: </label> <span>{props.record.date}</span>
        <label>Log: </label>
        <article>
    
        </article>
        </div>
    </div>
  )
}

export default patientRecord;