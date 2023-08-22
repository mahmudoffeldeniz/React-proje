import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const NewsDetails = () => {
  let params = useParams();
  const { id } = params;
  
  const [data , setData] = useState({})

  useEffect(()=>{
    let news = JSON.parse(localStorage.getItem('news'))

    setData(
      news.find(n => n.id == id)
    )

  }, [id])

  return (
    <div>
      <div className="card mb-3" >
        <div className="mx-5">
          <h1 className="text-center"> {data?.title}</h1>
            <div className="container my-5 ">
                <div className="row">
                  <div className="col-md-4">
                    <img src={data?.img} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{data?.title}</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
