import React, { useEffect, useState } from "react";
import SectionJobs from "./SectionJobs";

const JobCatagery = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const dataLoad = async () => {
      const res = await fetch("/catagoryJob.json");
      const data = await res.json();
      setJobs(data);
    };
    dataLoad();
  }, []);
  return (
    <div className="my-6 flex justify-center gap-10 mx-auto flex-col">
      <div className=" my-12 text-center ">
        <p className="font-semibold text-5xl mb-9">Job Catagery List</p>
        <p className="text-3xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-[25px] md:mx-[100px] sm:mx-0">
        {jobs.map((job) => (
          <SectionJobs job={job} key={job._id}></SectionJobs>
        ))}
      </div>
    </div>
  );
};

export default JobCatagery;
