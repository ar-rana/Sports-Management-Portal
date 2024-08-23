import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import TournamentBar from "./TournamentBar";

const CreatedTournaments = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  const dashFunc = async () => {
    const q = query(
      collection(db, "tournaments"),
      where("organizerId", "==", user.id)
    );
    const dataDoc = await getDocs(q);
    setData(dataDoc.docs);
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

export default CreatedTournaments;
