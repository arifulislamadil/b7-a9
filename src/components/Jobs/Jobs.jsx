import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import { addToDb } from "../../utils/fakeDb";

const Jobs = () => {
  const jobs = useLoaderData();
  const fourJobs = jobs.slice(0, 4);
  const [showAll, setShowAll] = useState("");
  const handleJobDetails = (details) => {};

  const handleAddToCart = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <div>
        <div className="text-center">
          <h3 className="text-3xl font-bold mt-6">Featured Jobs</h3>
          <p className="mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
          {fourJobs.map((job) => (
            <Job key={job.id} job={job} handleJobDetails={handleJobDetails}></Job>
          ))}
        </div> */}
        <Link onClick={() => setShowAll("show-all")} className="text-center">
          <div>
            <button className="">See All Jobs</button>
          </div>
        </Link>
      </div>
      {showAll === "show-all" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
          {jobs.map((job) => (
            <Job
              key={job.id}
              job={job}
              handleJobDetails={handleJobDetails}
            ></Job>
          ))}
        </div>
      ) : (
       <div>
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6">
          {fourJobs.map((job) => (
            <Job
              key={job.id}
              job={job}
              handleJobDetails={handleJobDetails}
            ></Job>
          ))}
          
        </div>
        <div className="text-center">
            <Link
              onClick={() => setShowAll("show-all")}
              className="text-center"
            >
              <button className="btn-primary">See All Jobs</button>
            </Link>
          </div>
       </div>
        
      )}
    </div>
  );
};

export default Jobs;
