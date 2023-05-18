import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../Helpers/LazyLoader";
const PortfolioView = lazy(() => import("../Components/Portfolios/PortfolioView"));

const SinglePortfoliosPage = () => {
  return (
    <Fragment>
        <Suspense lazy={<LazyLoader/>}>
        <PortfolioView/>
        </Suspense>
    </Fragment>
  )
}

export default SinglePortfoliosPage
