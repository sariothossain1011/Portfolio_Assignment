import React, { useEffect,useState } from 'react'
import { GetPortfolio } from '../../ApiServices/ApiService'
import FullScrenLoder from '../Common/FullScreenLoder';
import { NavLink } from 'react-router-dom';
const Portfolios = () => {

  const [PortfolioData ,SetPortfolioData] = useState([]);
  // console.log(PortfolioData)
  // console.log(PortfolioData)

  useEffect(()=>{
    GetPortfolio().then((Result)=>{
      // alert(Result[0])
      SetPortfolioData(Result)
    })
    },[])

    if( PortfolioData.length > 0 ){
      return (
        <div className='portfolio-body'>
        <div className="row portfolio-items">
          <div className="col-md-12">
            <h1>PORTFOLIOS</h1>
            <div className="row">
              {
                PortfolioData.map((item,index)=>{
                  return(
                    <div className="col-md-6 pt-4 portfolio-item">
                      <figure>
                        <img src={item.image} alt="portfolioimg.." />
                      </figure>
                      <h6>Name : {item.name}</h6>
                      <h6>Category : {item.category}</h6>
                      <h6>Technology : {item.technology}</h6>
                      <div className="botton">
                        <NavLink to={item.live} target="_blank">Live Link</NavLink>
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
        <div  className='portfolio-body'>
        <FullScrenLoder/>
      </div>
      )
    }

  
}

export default Portfolios