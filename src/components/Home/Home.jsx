import React from "react";
import bannerImg from "../../assets/All Images/banner-img.png"
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-6 bg-gray-100 rounded-lg">
        <div className="basis-1/2 sm:px:4 lg:px-8">
          <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text mt-5">
            One Step Closer To Your Dream Job
          </h1>
          <p className="mt-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button style={{marginTop:"40px"}} className="btn-primary">Get Started</button>
        </div>
        <div className="basis-1/2">
          <div>
            <img src={bannerImg} className='w-5/6 mx-auto rounded-lg bg-gray-100' alt="" />
          </div>
        </div>
      </div>
      <JobCategoryList/>
      <Jobs/>
    </div>
  );
};

export default Home;
