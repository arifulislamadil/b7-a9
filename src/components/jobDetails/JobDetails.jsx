import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faDollar,
  faBriefcase,
  faPhone,
  faVoicemail,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utils/fakeDb";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
 
  const [job, setJob] = useState({});
  useEffect(() => {
    const jobData = jobs.find((job) => job.id == id);
    setJob(jobData);
  }, []);
const handleAddToCart=(id)=>{
    addToDb(id);
}
  return (
    <div className="mt-6">
      <h1 className="text-center text-4xl font-bold  px-4 py-2 bg-gray-500 text-white">
        Job Details
      </h1>
      <div className="flex flex-col md:flex-row mt-6 ">
        <div className="mt-6 w-4/6 pr-0 md:pr-20">
          <p className="mt-2">
            <span className="font-bold ">Job Description:<br/></span>
            {job.description}
          </p>
          <p className="mt-2">
            <span className="font-bold mt-4">Job Responsibility:<br/></span>
            {job.responsibilities}
          </p>
          <p className="mt-2"><span className="font-bold mt-4">Requirements:<br/></span> {job.requirements}</p>
          <p className="mt-2"><span className="font-bold mt-4">Experience :<br/></span> {job.experience} Years</p>
        </div>
        <div className="border-2 bg-gray-100 p-12 w-6/6 md:w-2/6 mt-20 md:mt-0">
          <h5 className="border-b-2 border-purple-400 pb-4">Job Details</h5>
          <div>
            <h3 className="text-md mt-2">
              <FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faCircleDollarToSlot}
              />
              <span className="font-bold">Salary:</span> {job.salary} (Yearly)
            </h3>
            <h3 className="mt-2">
              <FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faBriefcase}
              />
              <span className="font-bold">Job Title: </span>
              {job.title}
            </h3>

            <h3 className="border-b-2 border-gray-400 pb-2 mt-4">
              Contact Information
            </h3>

            <h3 className="text-md mt-2">
              <FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faPhone}
              />
              <span className="font-bold">Phone:</span> {job.phone}
            </h3>
            <h3 className="mt-2">
              <FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faEnvelope}
              />
              <span className="font-bold">Email: </span>
              {job.email}
            </h3>
            <h3 className="mt-2">
              <FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faLocation}
              />
              <span className="font-bold">Address: </span>
              {job.address}
            </h3>
            <div className="text-center">
              <button className="btn-primary" onClick={()=>handleAddToCart(id)}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
