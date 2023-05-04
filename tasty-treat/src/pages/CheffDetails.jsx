import React, { Suspense, useRef } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleChefDetails from "./SingleChefDetails";
import ChefDetailsBanner from "./chefDetailsBanner";
import clsx from "clsx";
const ingleChefDetails = React.lazy(() => import("./SingleChefDetails"));
import useLazyLoad from "../components/useLazyLoad";
import { LoadingPosts } from "../components/LoadingPosts";

const NUMBER_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const CheffDetails = () => {
  const chefDetailed = useLoaderData();
  // console.log(chefDetailed)
  const { name, picture, recipees, total_recipees, yearOfExperience } =
    chefDetailed;
  console.log(chefDetailed);
  const triggeredRef = useRef();
  // console.log(recipees);
  return (
    <Suspense
      fallback={
        <div>
          Loading ...... 
        </div>
      }
    >
      <div className="w-2/3 mx-auto my-[15vh]">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={picture} className="w-[300px]" />
                <div>
                  <h1 className="text-5xl font-bold">{name}</h1>
                  <p className="py-6">Total Recipee: {total_recipees}</p>
                  <p className="py-6">Experiences: {yearOfExperience}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              {recipees.map((recipee, i) => (
                <SingleChefDetails
                  key={i}
                  recipee={recipee}
                  chefDetailed={chefDetailed}
                ></SingleChefDetails>
              ))}
            </div>
            <div
              ref={triggeredRef}
              className={clsx("trigger", { visible: false })}
            ></div>
          </div>
    </Suspense>
  );
};

export default CheffDetails;
