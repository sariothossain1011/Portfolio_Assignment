import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../Helpers/LazyLoader";
const Portfolios = lazy(() =>
  import("../Components/Portfolios/PortfoliosList")
);

const PortfoliosPage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader />}>
        <Portfolios />
      </Suspense>
    </Fragment>
  );
};

export default PortfoliosPage;
