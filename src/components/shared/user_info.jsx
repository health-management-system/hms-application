import React from 'react'
import './user_info.css'

export default function doctorInfo({ doctorInfo = [] }) {
  return (
        <div className='inner-box rounded-md'>
          <ul className='user-info-list'>
            {doctorInfo.map((doctorInfo) => {
              return (
                <li className='user-info-list-item rounded-md' key={doctorInfo.label}><label className='user-info-label' id={doctorInfo.label_id}>{doctorInfo.label}</label><span className='user-info-span' id={doctorInfo.value_id}>{doctorInfo.value}</span></li>
              ) 
            })}
          </ul>
        </div>
  )
}