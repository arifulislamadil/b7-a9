import { key } from "localforage";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDb";

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

const AppliedJobs = () => {
  const jobsList = useLoaderData();

  const carts = [];
  const savedCart = getStoredCart();
  for (const id in savedCart) {
    const foundJob = jobsList.find((job) => job.id == id);
    if (foundJob) {
      carts.push(foundJob);
    }
  }
  return (
    <div>
      <h1 className="text-4xl text-center mt-40 md:mt-20 font-bold">
        Applied Jobs
      </h1>
      <div className="flex flex-col mt-8">
        {carts.map((cart) => (
          <div className="flex justify-between border-2 mt-3 p-6">
            <div className="flex">
              <div>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={cart.img}
                  alt=""
                />
              </div>

              <div className="ml-28">
                <h3 className="text-2xl">{cart.title}</h3>
                <h4 className="text-xl">{cart.company}</h4>
                <div className="flex">
                  <button className="btn-extra mr-4">{cart.status[0]}</button>
                  <button className="btn-extra">{cart.status[1]}</button>
                </div>
                <p className="mt-2"><FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faPhone}
              />{cart.location}</p>
                <p className="mt-2"><FontAwesomeIcon
                className="text-purple-400 mr-2"
                icon={faDollar}
              />{cart.salary}</p>
              </div>
            </div>

            <div>
              <Link to={`/job/${cart.id}`}>
                <button className="btn-primary">{cart.viewDetails}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
