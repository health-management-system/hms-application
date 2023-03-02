import React from 'react'
import NavBar from '../shared/Navbar'

function ProfileLayout({children, signOut}) {
  return (
    <div className=' w-full h-screen bg-baseCol'>
        <NavBar signOut={signOut}/>
        
        {children}
    </div>
  )
}

export default ProfileLayout