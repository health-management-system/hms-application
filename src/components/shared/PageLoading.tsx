import React from 'react'
import {BiLoaderCircle} from "react-icons/bi"


function PageLoading() {
  return (
    <div className='h-[90vh] w-full flex flex-1 justify-center items-center'>
        <BiLoaderCircle data-cy="PageLoading-loader" className='animate-spin text-4xl text-priCol'/>
    </div>
  )
}

export default PageLoading