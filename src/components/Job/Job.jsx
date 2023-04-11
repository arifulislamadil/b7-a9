import React from "react";

const Job = ({ job }) => {
  const { img, title, company, status, location, salary } = job;
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
            <button className="border-solid border-2 mr-6 border-sky-500">
              {status[0]}
            </button>
            <button className="border-solid border-2 border-sky-500">
              {status[1]}
            </button>
          </div>
          <p> {status[1]}</p>
          <div className="flex">
            <p className="mr-6">{location}</p>
            <p>{salary}</p>
          </div>
          <div>
            <button
              type="button"
              style={{
                border: "2px solid white",
                padding: "5px 10px",
                backgroundColor: "lightGray",
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
