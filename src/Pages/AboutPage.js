import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from '../Helpers/LazyLoader'
const About = lazy(()=>import("../Components/About/About"))
const AboutPage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader/>}>
        <About/>
      </Suspense>
    </Fragment>
    
  )
}

export default AboutPage