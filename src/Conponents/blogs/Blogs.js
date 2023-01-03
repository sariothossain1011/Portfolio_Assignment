import React, { useEffect ,useState } from 'react'
import { GetBlog } from '../../ApiServices/ApiService'
import { FaRegComment } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import FullScrenLoder from '../Common/FullScreenLoder';
const Blogs = () => {

  const [ BlogData, SetBlogData ] = useState([]);
  // console.log(BlogData)

  useEffect(()=>{
    GetBlog().then((Result)=>{
      // console.log(Result)
      SetBlogData(Result)
    })
  },[]);
  if(BlogData.length > 0 ){
    return (
      <div className='blog-body'>
      <div className="row blog-items">
        <div className="col-md-12">
          <h1>BLOGS</h1>
          <div className="row">
          {
              BlogData.map((item,index)=>{
                return(
                  <div className="col-md-6 blogs-item" key={index}>
                    <figure>
                      <img src={item.image} alt="" />
                    </figure>
                    <div className='blogs-text-section'>
                    <h5><a href="/">{item.subject}</a></h5>
                    <div className="row">
                      <div className="col-4">10:11:2022</div>
                      <div className="col-8 blog-icons">
                        <span><FaRegComment  className='icon'/> 5 </span>
                        <span><AiOutlineEye  className='icon' /> 20 </span>
                        </div>
                    </div>
                    </div>
                  </div>
                )
              })
          }
          </div>
        </div>
      </div>
      </div>
    )
  }else{
    return (
      <div className='blog-body'>
        <FullScrenLoder/>
      </div>
    )
  }
  
}

export default Blogs