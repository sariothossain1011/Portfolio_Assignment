import React, { useState, useEffect } from "react";
import { GetPortfoliosRequest } from "../../ApiServices/ApiService";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FullScreenLoader from "../../Helpers/FullScreenLoader";
import ReactPaginate from "react-paginate";
import "./Style.css";

const PortfoliosList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const portfoliosData = useSelector((state) => state.portfolios.PortfolioList);

  useEffect(() => {
    (async () => {
      await GetPortfoliosRequest();
    })();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(portfoliosData.length / pageSize);
  const start = currentPage * pageSize;
  const end = (currentPage + 1) * pageSize;

  if (portfoliosData.length > 0) {
    return (
      <div className="portfolio-body">
        <div className="row portfolio-items">
          <div className="col-md-12">
            <h1>PORTFOLIOS</h1>
            <div className="row">
              {portfoliosData.slice(start, end).map((item, index) => {
                return (
                  <div className="col-md-6 pt-4 portfolio-item" key={index}>
                    <figure>
                      <img src={item.image} alt="portfolio-Img.." />
                    </figure>
                    <h6>Name : {item.name}</h6>
                    <h6>Category : {item.category}</h6>
                    <h6>Technology : {item.technology}</h6>
                    <div className="button">
                      <Link to={`/portfolios/${item._id}`} target="">
                        View Info
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
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
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="portfolio-body">
        <FullScreenLoader />
      </div>
    );
  }
};

export default PortfoliosList;
