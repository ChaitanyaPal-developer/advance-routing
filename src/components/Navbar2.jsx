import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

  let navigate = useNavigate()
  return (
    <div className='py-3 px-5 bg-orange-500'>
      <button
          onClick={() => {
            navigate('/')
          }}
          className='font-medium bg-pink-500 px-5 py-2 cursor-pointer active-scale-45'>
          Return to Home page  
      </button>
      <button
          onClick={() => {
            navigate(-1)
          }}
          className='font-medium bg-green-800 px-5 py-2 m-2 cursor-pointer active-scale-45'>
          Back  
      </button>  
           <button
          onClick={() => {
            navigate(+1)
          }}
          className='font-medium bg-green-800 px-5 py-2 m-2 cursor-pointer active-scale-45'>
          Next  
      </button>  

    </div>
  )
}

export default Navbar2