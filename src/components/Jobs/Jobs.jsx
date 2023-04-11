import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData();
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
            {
                jobs.map(job=><Job key={job.id} job={job}></Job>)
            }
        </div>
    );
};

export default Jobs;