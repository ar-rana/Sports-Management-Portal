import React from "react";

const TournamentBar = ({ tournament }) => {
  return (
    <div
      className="bg-green-600 w-[75%] flex flex-col sm:flex-row rounded-lg"
    >
      <div className="space-x-2 flex">
        <span className="bg-white m-4 rounded-md font-bold p-2">
          Name of Tournament
        </span>
        <span className="bg-white m-4 rounded-md font-bold p-2">Date</span>
      </div>
      <button className="xl:ml-auto md:ml-auto bg-white m-4 rounded-md font-bold p-2 cursor-pointer">
        View Details
      </button>
    </div>
  );
};

export default TournamentBar;
