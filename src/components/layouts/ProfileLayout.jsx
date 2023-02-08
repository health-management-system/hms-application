import React from 'react'
import NavBar from '../shared/Navbar'

function ProfileLayout({children}: {children: React.ReactNode}) {
  return (
    <div className=' w-full'>
        <NavBar/>
        
        {children}
    </div>
  )
}

export default ProfileLayout