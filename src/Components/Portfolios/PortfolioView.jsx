import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GetSinglePortfolioRequest } from "../../ApiServices/ApiService";
import { useSelector } from "react-redux";
import { BiLink } from "react-icons/bi";
import { MdVideoLibrary} from "react-icons/md";
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
                  <a href={data.liveLink} target="_blank" rel="noreferrer">
                    <BiLink className="button-icon"/> 
                     Live Link
                  </a>
                </div>
                <div className="button col-md-6">
                  <Link to="" target="">
                    <MdVideoLibrary className="button-icon"/>
                    Video Link
                  </Link>
                </div>
              </div>
              <div className="">
                {data.featureDetails ? (
                  data.featureDetails.map((feature,i) => (
                    <div className="pt-4">
                      <p className="pb-2 fs-2">{feature.featureTitle}</p>
                      <p className="fs-5">{feature.subDetails}</p>
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
