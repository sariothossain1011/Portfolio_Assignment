import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GetSinglePortfolioRequest } from "../../ApiServices/ApiService";
import { useSelector } from "react-redux";
import { BiLink } from "react-icons/bi";
import { MdVideoLibrary} from "react-icons/md";
import { BsArrowLeft} from "react-icons/bs";
import "./Portfolios.css";

const PortfolioView = () => {
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await GetSinglePortfolioRequest(id);
    })();
  }, []);
  const data = useSelector((state) => state.portfolios.PortfolioView);
  return (
    <Fragment>
      <div className="section-body">
        <div className="section-items">
        
          <div className="row">
            <div className="col-md-12">
              <figure className="portfolio-single-image">
                <img src={data.image} alt="portfolio-Img.." />
              </figure>
              <h2 className="mt-3">{data.name}</h2>
              <div className="row my-4">
                <div className="button col-md-3">
                  <Link to="" target="">
                    <BiLink className="button-icon"/> 
                     Live Link
                  </Link>
                </div>
                <div className="button col-md-6">
                  <Link to="" target="">
                    <MdVideoLibrary className="button-icon"/>
                    Video Link
                  </Link>
                </div>
              </div>
              <h2>Features</h2>
              <div className="">
                {data.featureDetails ? (
                  data.featureDetails.map((feature) => (
                    <div className="pt-4">
                      <h4 className="pb-2">{feature.featureTitle}</h4>
                      <h6>{feature.subDetails}</h6>
                    </div>
                  ))
                ) : (
                  <p>not found data</p>
                )}
              </div>
              <div className="package-items pt-4">
                {data.clientPackage ? (
                  <div>
                    <h6>
                      On this website, I will use many NPM packages like
                      Client-Side
                    </h6>
                    <div className="package-item p-5">
                      <pre>
                        <code>
                          {JSON.stringify(data.clientPackage, null, 2)}
                        </code>
                      </pre>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
                {data.serverPackage ? (
                  <div className="pt-5">
                    <h6>
                      On this website, I will use many NPM packages like
                      -Server-Side
                    </h6>
                    <div className="package-item p-5">
                      <pre>
                        <code>
                          {JSON.stringify(data.serverPackage, null, 2)}
                        </code>
                      </pre>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioView;
