import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunt from "../Aunt/Aunt";
import "./Grandpa.css";
const Grandpa = () => {
  const ring = "diamond";
    const [money,setMoney] = useState(0)
  return (
    <div className="grandpa">
      <h1>I am from Grandpa component.</h1>
      <p>Has money {money}</p>
      <moneyContext.Provider value={[money,setMoney]}>
      <section className="A-flex">
        <RingContext.Provider value="golden Ring">
          <Father ring={ring}></Father>
          <Uncle></Uncle>
          <Aunt ring={ring}></Aunt>
        </RingContext.Provider>
      </section>
      </moneyContext.Provider>
    </div>
  );
};

export default Grandpa;
export const RingContext = createContext("gold");
export const moneyContext = createContext(0)

/*
 1. Create A context
 2. Create a Provider and pass the value
 3. Use context to receive the value


*/
