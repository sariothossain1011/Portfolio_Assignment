import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
const FullScreenLoader = () => {
  const loader = useSelector((state)=> state.settings.loader)
  return (
    <Fragment>
      <div className={loader+"LoadingOverlay"}>
        <div className="Line-Progress">
          <div className="indeterminate">
            <div className='main-ring'>
              <div className='sub-ring'></div>
              <div className='sub-ring'></div>
              <div className='sub-ring'></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FullScreenLoader