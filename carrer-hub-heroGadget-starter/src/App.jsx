import {Outlet,useLoaderData} from "react-router-dom";
import Header from "./components/Header";
import React, {createContext} from "react";
import {Toaster} from 'react-hot-toast';
import MyFooter from "./components/MyFooter";
export const JobContext = createContext([]);
export const cartContext = createContext([]);

const App = () => {
  const {jobs} = useLoaderData();
  
  return (
    <React.Fragment>
      <JobContext.Provider value={jobs}>
        <Header></Header>
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet></Outlet>
        </div>
        <div className="mt-[130px]">
        <MyFooter></MyFooter>
        </div>
        <Toaster />
      </JobContext.Provider>
    </React.Fragment>
  );
};

export default App;
