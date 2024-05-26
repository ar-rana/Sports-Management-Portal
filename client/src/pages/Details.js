import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const { tournamentData } = location.state;

  return (
    <div>
      <h2>{tournamentData.name}</h2>
      <h3>Details</h3>
    </div>
  );
};

export default Details;
