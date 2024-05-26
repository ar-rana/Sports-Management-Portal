import React from "react";
import { useNavigate } from "react-router-dom";
import Details from "../pages/Details";

const TournamentBar = ({ tournament }) => {
  const navigate = useNavigate();

  const routeFunction = () => {
    const tournamentData = tournament.data();

    navigate(`/tournament/${tournament.id}`, { state: { tournamentData } });
  };
  return (
    <div className="bg-green-600 w-[75%] flex flex-col sm:flex-row rounded-lg">
      <div className="space-x-2 flex truncate mr-2">
        <span className="bg-white m-4 rounded-md font-bold p-2 truncate">
          {tournament.data().name}
        </span>
        <span className="bg-white m-4 rounded-md font-bold p-2">
          {tournament.data().startingDate}
        </span>
      </div>
      <button
        onClick={routeFunction}
        className="xl:ml-auto md:ml-auto bg-white m-4 rounded-md font-bold p-2 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
};

export default TournamentBar;
