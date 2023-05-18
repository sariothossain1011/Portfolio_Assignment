import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from '../Helpers/LazyLoader'
const Error = lazy(()=>import("../Components/Error/Error"))


const ErrorPage = () => {
  return (
    <Fragment>
        <Suspense lazy={<LazyLoader/>}>
        <Error/>
        </Suspense>
    </Fragment>
  )
}

export default ErrorPage