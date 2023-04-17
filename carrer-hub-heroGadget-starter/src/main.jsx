import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
import MainHome from "./components/MainHome";
import Statistic from "./components/Statistic";
import JobCatagery from "./components/JobCatagery";
import Jobs from "./components/Jobs";
import Bolg from "./components/Bolg";
import Apply from "./components/Apply";
import { getJobsAndAppliedJobs } from "./getJobsAndAppliedJobs/getJobsAndAppliedJobs";
import ErrorPage from "./components/ErrorPage";
import JobHunters from "./components/JobHunters";
import JobApplicationForm from "./components/JobApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getJobsAndAppliedJobs,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: getJobsAndAppliedJobs,
      },
      {
        path: "/blog",
        element: <Bolg></Bolg>,
      },
      {
        path: "/apply",
        element: <Apply></Apply>,
      },
      {
        path: "/jobCatagory",
        element: <JobCatagery></JobCatagery>,
      },
      {
        path: "/jobHunter/:id",
        element: <JobHunters></JobHunters>,
        loader: async ({ params }) => {
          const res = await fetch("/jobs.json");
          const data = await res.json();
          return data.filter((item) => item.id == params.id);
        },
      },
      {
        path: "/form",
        element: <JobApplicationForm></JobApplicationForm>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
