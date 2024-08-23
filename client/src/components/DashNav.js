import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import RegisteredTournaments from "./RegisteredTournaments";
import CreatedTournaments from "./CreatedTournament";

const DashNav = (props) => {
  const { user } = useContext(UserContext);

  if (user && props.dashState === "created_tournaments") {
    return <CreatedTournaments />;
  }
  if (user && props.dashState === "registered_tournaments") {
    return <RegisteredTournaments />;
  }
  // return <div></div>;
};

export default DashNav;
