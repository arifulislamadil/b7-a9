import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job,handleJobDetails }) => {
  const {id, img, title, company, status, location, salary } = job;
  return (
    <div>
      <div>
        <div
          className="w-6/6 p-6 rounded"
          style={{ border: "2px solid lightGray" }}
        >
          <div className="text-center rounded">
            <img className="w-2/6 h-2/6 inline rounded-full" src={img} alt="" />
          </div>
          <h3>{title}</h3>
          <h6>{company}</h6>
          <div className="flex">
            <button className="">
              {status[0]}
            </button>
            <button className="">
              {status[1]}
            </button>
          </div>
          <p> {status[1]}</p>
          <div className="flex">
            <p className="mr-6">{location}</p>
            <p>{salary}</p>
          </div>
          <div>
            <Link to={`job/${id}`}>
              <button onClick={()=>handleJobDetails(id)}
                type="button"
                style={{
                  border: "2px solid white",
                  padding: "5px 10px",
                  backgroundColor: "lightGray",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
