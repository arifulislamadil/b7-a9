import React from "react";
import { Link } from "react-router-dom";

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

const Job = ({ job,handleJobDetails }) => {
  const {id, img, title, company, status, location, salary } = job;
  return (
    <div className="mt-6">
      <div>
        <div
          className="w-6/6 p-6 rounded"
          style={{ border: "2px solid lightGray" }}
        >
          <div className=" rounded">
            <img className="w-2/6 h-2/6 inline rounded" src={img} alt="" />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <h6 className="text-xl">{company}</h6>
          <div className="flex">
            <button className="btn-secondary ml-0 font-extrabold">
              {status[0]}
            </button>
            <button className="btn-secondary font-bold">
              {status[1]}
            </button>
          </div>
          
          <div className="flex">
            <p className="mr-6"><FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faLocation}
              /> {location}</p>
            <p><FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faDollar}
              />{salary}</p>
          </div>
          <div className="text-left mt-2">
            <Link to={`job/${id}`}>
              <button className="btn-extra" onClick={()=>handleJobDetails(id)}
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
