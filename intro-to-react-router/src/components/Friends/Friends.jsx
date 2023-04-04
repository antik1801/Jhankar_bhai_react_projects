import React from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
  return (
    <div>
      <h2>This are my friends {friends.length}</h2>

      <div className="grid md:grid-cols-3 gap-3">{
        friends.map(friend=> <Friend key={friend.id} friend={friend}></Friend>)
      }</div>
    </div>
  );
};

export default Friends;
