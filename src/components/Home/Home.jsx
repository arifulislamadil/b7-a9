import React from "react";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div >
      <div className="flex flex-col md:flex-row md:mt-6 bg-gray-100 rounded-lg px-6">
        <div className="basis-1/2 px-20 md:pr-8 py-20">
          <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text mt-5">
            One Step<br/> Closer To Your <br/><span className="text-green-400 font-bold">Dream Job</span>
          </h1>
          <p className="mt-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button style={{marginTop:"20px"}} className="btn-primary">Get Started</button>
        </div>
        <div className="basis-1/2">
          <div>
            <img src='https://i.ibb.co/9cTShhW/banner-img.png' className='w-6/6 mx-auto rounded-lg bg-gray-100' alt="" />
          </div>
        </div>
      </div>
      <JobCategoryList/>
      <Jobs/>
    </div>
  );
};

export default Home;
