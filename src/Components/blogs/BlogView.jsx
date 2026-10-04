import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetSingleBlogRequest } from "../../ApiServices/ApiService";
import { useSelector } from "react-redux";
import "./Blogs.css";
import SocialMediaIcon from "../Common/SocialMediaIcon";
const BlogView = () => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await GetSingleBlogRequest(id);
    })();
  }, [id]);

  const data = useSelector((state) => state.blogs.BlogView);

  return (
    <div className="section-body">
      <div className="section-items">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <figure className="portfolio-single-image">
                <img src={data.image} alt="portfolio-Img.." />
              </figure>
              <h2 className="mt-3">{data.subject}</h2>
              <div className="">
                {data.blogsItems ? (
                  data.blogsItems.map((item) => (
                    <div className="pt-4">
                      <h4 className="pb-2">{item.title}</h4>
                      <h4 className="pb-2">{item.details}</h4>
                      <div>
                        <pre>
                          <code>
                            <h6>
                              {item.example ? (
                                <div className="package-item p-3">
                                  {JSON.stringify(item.example, null, 2)}
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </h6>
                          </code>
                        </pre>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>not found data</p>
                )}
              </div>
              <div className="py-4">Source: {data.source}</div>
              <hr className="" />
              <div className="row py-2 d-flex justify-content-between">
                <div className="col-md-6 col-sm-12 text-center pt-2">
                  <div className="">
                    {data.technology ? (
                      data.technology.map((item) => {
                        return (
                          <button className="mx-1 py-1 px-3 mt-2">{item}</button>
                        );
                      })
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 text-center pt-2">
                  <SocialMediaIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
