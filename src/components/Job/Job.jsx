import React from "react";

const Job = ({ job }) => {
  const { img, title, company, status, location, salary } = job;
  return (
    <div className="p-6 rounded bg-gray-100">
      <img className="w-1/6 h-1/6" src={img} alt="" />
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
  );
};

export default Job;
