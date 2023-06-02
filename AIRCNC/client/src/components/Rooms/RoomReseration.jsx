import React, { useContext } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";
import { AuthContext } from "../../providers/AuthProvider";

const RoomReseration = ({roomData}) => {
  const { user, role } = useContext(AuthContext);
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender></Calender>
      </div>

      <hr />
      <div className="p-4">
        {" "}
        <Button disabled={roomData.host.email === user.email} label="Reserve"></Button>{" "}
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReseration;
