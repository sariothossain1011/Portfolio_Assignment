import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../Helpers/LazyLoader";
const Navbar = lazy(() => import("../Components/Common/Navbar"));

const NavbarPage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader />}>
        <Navbar />
      </Suspense>
    </Fragment>
  );
};

export default NavbarPage;
