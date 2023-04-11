import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    console.log(id)
    const [job,setJob] = useState({});
    useEffect(()=>{
        const jobData = jobs.find(job=>job.id == id);
        console.log(jobData);
        setJob(jobData)
    },[]);
   
    return (
        <div className='mt-6'>
            <h1 className='text-center text-4xl font-bold border-2 px-4 py-2 border-gray-300'>Job Details</h1>
            <div className='flex flex-col md:flex-row mt-6 '>
            <div className='mt-6 w-4/6'>
                <p><span className='font-bold'>Job Description:</span>{job.description}</p>
                <p><span className='font-bold'>Job Responsibility:</span>{job.responsibilities}</p>
                <p>Educational Requirements:{job.requirements}</p>
            </div>
            <div className='border-2 border-gray-400 p-12 w-2/6'>
                <h5 className='border-b-2 border-purple-400 pb-4'>Job Details</h5>
                <div>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default JobDetails;