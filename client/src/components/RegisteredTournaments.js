import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import TournamentBar from "./TournamentBar";

const RegisteredTournaments = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const dashFunc = async () => {
    const q = query(collection(db, "users", user.id, "registered"));
    const dataDoc = await getDocs(q);
    const registeredTournamentIds = dataDoc.docs.map((doc) => doc.data().tournamentID);
    console.log(registeredTournamentIds);
    if (registeredTournamentIds.length == 0) {
      setData([]);
      return;
    }

    const q2 = query(
      collection(db, "tournaments"),
      where("__name__", "in", registeredTournamentIds)
    );
    const tournamentDocs = await getDocs(q2);

    const tournaments = tournamentDocs.docs;//.map(doc => doc.data());
    setData(tournaments);
  };

  useEffect(() => {
    if (user) {
      dashFunc();
    }
  }, [user]);

  return (
    <div>
      {data.map((each) => (
        <div className="flex flex-col items-center my-6 space-y-3 w-auto">
          {/* <p key={each.id}>good {each.id}</p> */}
          <TournamentBar key={each.id} tournament={each} />
        </div>
      ))}
    </div>
  );
};

export default RegisteredTournaments;
