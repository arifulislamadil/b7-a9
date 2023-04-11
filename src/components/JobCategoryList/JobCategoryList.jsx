import React, { useEffect, useState } from "react";

const JobCategoryList = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("jobCategoryList.json")
      .then((res) => res.json())
      .then((data) => setLists(data.categories));
  }, []);
  return (
    <div className="mt-6 ">
      <div className="text-center">
        <h3 className="text-3xl font-bold">Job Category List</h3>
        <p className="mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-6">
        {lists.map((list) => (
          <div key={list.id} className="p-6 rounded bg-gray-100 text-center">
            <img className="inline mt-2" src={list.icon} alt="" />
            <h3 className="mt-2">{list.title}</h3>
            <p className="mt-1">{list.jobs_available} Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
