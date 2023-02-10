import React from 'react'
import NavBar from '../shared/Navbar'

function ProfileLayout({children}) {
  return (
    <div className=' w-full'>
        <NavBar/>
        
        {children}
    </div>
  )
}

export default ProfileLayout