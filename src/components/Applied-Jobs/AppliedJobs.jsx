import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs= useLoaderData();
    const [getJobs,setGetJobs]=useState([])
    let jobList = []
    const id = localStorage.getItem('job-list');
    const idParse = JSON.parse(id)
    const handleSelectJob =(idParse)=>{
        const job = jobs.find(jb=>jb.id===id);
        setGetJobs(prevData =>[...prevData,job])
        ;    
    }
    console.log(getJobs);
    return (
        <div>
            <h3>Applied Jobs</h3>
        </div>
    );
};

export default AppliedJobs;