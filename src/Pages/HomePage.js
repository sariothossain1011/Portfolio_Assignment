import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from '../Helpers/LazyLoader'
const Home = lazy(()=>import("../Components/Home/Home"))
const HomePage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader/>}>
      < Home />
      </Suspense>
    </Fragment>
  )
}

export default HomePage