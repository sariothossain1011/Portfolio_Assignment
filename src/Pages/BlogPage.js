import React, { Fragment, Suspense ,lazy} from 'react';
import LazyLoader from '../Helpers/LazyLoader';
const BlogsList = lazy(()=>import("../Components/blogs/BlogsList"));
const BlogPage = () => {
  return (
    <Fragment>
      <Suspense lazy={<LazyLoader/>}>
      <BlogsList />
      </Suspense>
    </Fragment>
  )
}

export default BlogPage