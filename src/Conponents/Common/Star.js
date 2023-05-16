import React, { Fragment } from 'react'

import {AiFillStar} from "react-icons/ai"
const Star = () => {
  return (
    <Fragment>
        <div className='star-icons'>
        <AiFillStar className='icon'/>
        <AiFillStar className='icon'/>
        <AiFillStar className='icon'/>
        <AiFillStar className='icon'/>
        <AiFillStar className='icon'/>
        </div>
    </Fragment>
  )
}

export default Star

