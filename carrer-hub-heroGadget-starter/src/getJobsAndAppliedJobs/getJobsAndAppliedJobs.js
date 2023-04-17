import { getStoredCart } from "../components/Utils/fakeDB";

export const getJobsAndAppliedJobs = async () => {
    // fetch the data from database
    const jobsData = await fetch('/jobs.json');
    const jobs = await jobsData.json();
    // match Data that matchs in local store
    let cartArray = [];
    const savedCart = getStoredCart();
    for (const id in savedCart) {
        const foundJobs = jobs.find(job => job.id == id);
        if (foundJobs) {
            foundJobs.quantity = savedCart[id];
            cartArray.push(foundJobs);
        }
    }
    return { jobs, cartArray };
}
