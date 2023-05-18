import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from '../Helpers/LazyLoader'
const Contact = lazy(()=>import("../Components/Contact/Contact"))


const ContactPage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader/>}>
      <Contact />
      </Suspense>
    </Fragment>
  )
}

export default ContactPage