import React from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <div>
      <div className="text-center">
        <h3 className="text-3xl font-bold mt-6">Featured Jobs</h3>
        <p className="mt-4">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
