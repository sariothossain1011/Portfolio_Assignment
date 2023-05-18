import React, { Fragment, Suspense, lazy } from "react";
import LazyLoader from "../Helpers/LazyLoader";
const BlogView = lazy(() => import("../Components/blogs/BlogView"));

const SingleBlogPage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader />}>
        <BlogView />
      </Suspense>
    </Fragment>
  );
};

export default SingleBlogPage;
