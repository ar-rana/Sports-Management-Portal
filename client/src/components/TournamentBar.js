import React from "react";
import { useNavigate } from "react-router-dom";

const TournamentBar = ({ tournament }) => {
  const navigate = useNavigate();
  const today = new Date();
  const tournamentEndDate = new Date(tournament.data().endingDate);

  const routeFunction = () => {
    const tournamentData = tournament.data();
    const tournamentID = tournament.id;

    navigate(`/tournament/${tournament.id}`, {
      state: { tournamentData, tournamentID },
    });
  };
  return (
    <div
      className={`${
        today > tournamentEndDate ? "bg-red-500" : "bg-green-600"
      } w-[75%] flex flex-col sm:flex-row rounded-lg`}
    >
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
