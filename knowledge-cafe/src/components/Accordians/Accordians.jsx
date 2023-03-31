import React from "react";

const Accordians = () => {
  return (
    <div className="container ">
      <h3>What is the difference between props and state? </h3>
      <p>Props are the parameter of a component but state is used to update components veriable value</p>
      <h3>How useState works ?</h3>
      <p>useState takes two variables in a array and a deault value of the componets variable . and setState help t set the value of the componet variable .
      </p>
      <h3>What is useEffect do without data fetch ?</h3>
      <p>Witout data fetch useEffect can update the variables value when any state changes to the site. It can create side effect.</p>
      <h3>how does react work ?</h3>
      <p>React basically lets us to declare JSX inside functional components , when any JSX is written react compile that JSX into javascript compile file through babble compiler and render it to us.</p>
    </div>
  );
};

export default Accordians;
