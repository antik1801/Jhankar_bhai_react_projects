import React, { useContext } from "react";
import Cousins from "../Cousins/Cousins";
import { RingContext, moneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const ring = useContext(RingContext);
  const [money,setMoney]  = useContext(moneyContext)
  return (
    <div>
      <h1>Uncle</h1>
      <p><small>GrandPa has money {money}</small></p>
      <button onClick={()=>setMoney(money+1000)}>send 1000</button>
      <section className="A-flex">
        <Cousins>Nabil has a {ring}</Cousins>
        <Cousins>Nabila</Cousins>
      </section>
    </div>
  );
};

export default Uncle;
