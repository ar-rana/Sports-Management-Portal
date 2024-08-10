import React from "react";
import demo from "../assets/Images/demo.png";

const CoachCard = () => {
  return (
    <div>
        <div className="flex-1 m-3 p-5 items-center">
          <div>
            <img src={demo} className="h-40" />
          </div>
          <div className="rounded-2xl bg-green-300 p-3 items-center">
            <h4>Name & Sport</h4>
          </div>
        </div>
    </div>
  );
};

export default CoachCard;
