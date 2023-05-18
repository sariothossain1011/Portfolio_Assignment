import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../Helpers/LazyLoader";
const Resume = lazy(() =>
  import("../Components/Resume/Resume")
);

const ResumePage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader/>}>
      <Resume />
      </Suspense>
    </Fragment>
  )
}

export default ResumePage