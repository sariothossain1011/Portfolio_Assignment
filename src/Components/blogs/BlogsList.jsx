import React, { Fragment, useEffect, useState } from "react";
import { GetBlog, GetBlogsRequest } from "../../ApiServices/ApiService";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import FullScreenLoader from "../../Helpers/FullScreenLoader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Blogs.css";

const BlogsList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    (async () => {
      await GetBlogsRequest();
    })();
  }, []);

  const BlogsData = useSelector((state) => state.blogs.BlogsList);
  console.log(BlogsData + "listData");

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(BlogsData.length / pageSize);
  const start = currentPage * pageSize;
  const end = (currentPage + 1) * pageSize;

  if (BlogsData.length > 0) {
    return (
      <div className="section-body">
        <div className="section-items">
          <div className="row">
            <div className="col-md-12 ">
              <div className="triangle-style py-5">
                <h2
                  className="py-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  BLOGS
                </h2>
              </div>
              <div className="row">
                {BlogsData.slice(start, end).map((item, index) => {
                  return (
                    <div
                      className="col-md-6 blogs-item"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="1500"
                    >
                      <figure>
                        <img src={item.image} alt="" />
                      </figure>
                      <div
                        className="blogs-text-section"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="1500"
                      >
                        <Link to={`/blogs/${item._id}`} target="" className="text-decoration-none text-white fs-4 py-5">
                          {item.subject}
                        </Link>

                        <div className="row py-2 mt-2 fs-5">
                          <div className="col-4">10:11:2022</div>
                          <div className="col-8 blog-icons">
                            <span>
                              <FaRegComment className="icon" /> 5{" "}
                            </span>
                            <span>
                              <AiOutlineEye className="icon" /> 20{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="pt-5 ">
                  <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    previousClassName={"pagination__prev"}
                    nextClassName={"pagination__next"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="section-body">
        <div className="section-items">
          <FullScreenLoader />
        </div>
      </div>
    );
  }
};

export default BlogsList;
