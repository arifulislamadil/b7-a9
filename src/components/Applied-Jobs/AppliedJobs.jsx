import { key } from "localforage";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDb";

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
    <div className="flex flex-col mt-6">
      {carts.map((cart) => (
        <div className="flex justify-between border-2 mt-3 p-6">
            <div>
                <img style={{width:"100px",height:"100px"}} src={cart.img} alt="" />
            </div>
          <div>
            <h3>{cart.title}</h3>
            <h4>{cart.company}</h4>
            <div className="flex">
            <button className="">
              {cart.status[0]}
            </button>
            <button className="">
              {cart.status[1]}
            </button>
          </div>
          <p>{cart.location}</p>
          <p>{cart.salary}</p>
          </div>
          <div>
            <button className="btn-primary">{cart.viewDetails}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
