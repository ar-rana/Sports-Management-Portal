import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const DashboardBar = ({ tournament }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const today = new Date();
  const tournamentEndDate = new Date(tournament.data().endingDate);
  const tournamentID = tournament.id;

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [tournamentsport, setTournamentSport] = useState("");
  const [start, setstartDate] = useState("");
  const [end, setendDate] = useState("");
  const [description, setDescription] = useState("");

  const routeFunction = () => {
    const tournamentData = tournament.data();

    navigate(`/tournament/${tournament.id}`, {
      state: { tournamentData, tournamentID },
    });
  };

  const updateTournament = async () => {
    try {
      const tournamentRef = doc(db, "tournaments", tournamentID);
      await updateDoc(tournamentRef, {
        name: name,
        sport: tournamentsport.toLowerCase(),
        startingDate: start,
        endingDate: end,
        description: description,
      });
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const updateBtn = async () => {
    if (user) {
      setOpen((prevState) => !prevState);
      setDescription(tournament.data().description);
      setName(tournament.data().name);
      setstartDate(tournament.data().startingDate);
      setendDate(tournament.data().endingDate);
      setTournamentSport(tournament.data().sport);
    }
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
      <div className="xl:ml-auto md:ml-auto">
        <button
          onClick={routeFunction}
          className="xl:ml-auto md:ml-auto bg-white m-4 rounded-md font-bold p-2 cursor-pointer"
        >
          View Details
        </button>
        <button
          onClick={updateBtn}
          className="w-20 xl:ml-auto md:ml-auto bg-white m-4 rounded-md font-bold p-2 cursor-pointer"
        >
          Edit
        </button>
      </div>
      {open && (
        <Modal
          className="max-w-xl h-auto w-[90%] absolute top-28 left-[50%] translate-x-[-50%] bg-white border-4 border-green-600 rounded-xl shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="p-1">
            <div className="border-b border-green-600">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect p-0 w-9 h-9 flex items-center justify-center"
              >
                <XMarkIcon
                  className="h-[22px] text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="flex flex-col p-4">
              <form className="space-y-2" onSubmit={updateTournament}>
                <input
                  className="text-black bg-gray-200 w-full p-2 rounded-lg border-2 border-green-500"
                  type="text"
                  placeholder="Enter Name of The Tournament"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <select
                  name="sports"
                  onChange={(e) => setTournamentSport(e.target.value)}
                  value={tournamentsport}
                  className="text-black bg-gray-200 w-full p-2 rounded-lg border-2 border-green-500"
                >
                  <option disabled value="">
                    Select a Sport
                  </option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="swimming">Swimming</option>
                  <option value="badminton">Badminton</option>
                  {/* keep the values in small case letters */}
                </select>
                <label className="font-semibold m-1 mr-4" for="Start Date">
                  Start Date:
                </label>
                <input
                  className="text-black bg-gray-200 w-[50%] p-2 rounded-lg border-2 border-green-500"
                  type="date"
                  value={start}
                  onChange={(e) => setstartDate(e.target.value)}
                />
                <br />
                <label className="font-semibold m-1 mr-6" for="End Date">
                  End Date:
                </label>
                <input
                  className="text-black bg-gray-200 w-[50%] p-2 rounded-lg border-2 border-green-500"
                  type="date"
                  value={end}
                  onChange={(e) => setendDate(e.target.value)}
                />
                <textarea
                  className="text-black bg-gray-200 w-full p-2 rounded-lg border-2 border-green-500"
                  row="3"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <button
                  type="submit"
                  onClick={updateTournament}
                  className="bg-green-500 p-2 rounded-lg font-medium"
                >
                  Update Tournament
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DashboardBar;
