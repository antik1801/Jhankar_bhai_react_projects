import React from "react";

const Tab = ({active,handleActive}) => {
  return (
    <div className="tabs mb-20">
      <a className={`tab tab-bordered ${active === 'tab1' ? 'tab-active' : 'tab-lifted'}`} onClick={()=>handleActive("tab1")}>Tab 1</a>
      <a className={`tab tab-bordered ${active === 'tab2' ? 'tab-active' : 'tab-lifted'}`} onClick={()=>handleActive("tab2")}>Tab 2</a>
      <a className={`tab tab-bordered ${active === 'tab3' ? 'tab-active' : 'tab-lifted'}`} onClick={()=>handleActive("tab3")}>Tab 3</a>
    </div>
  );
};

export default Tab;
