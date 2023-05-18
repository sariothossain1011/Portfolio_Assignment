import React from 'react'
import { useEffect } from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
const Error = () => {
    let navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },3000)
        
      })

  return (
    <>
    <div className="error-body">
        <div className="error-items">
            <div className="row">
                <div className='error-button'>
                    <NavLink to='/' className='btn btn-warning'>Back to Home</NavLink>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Error