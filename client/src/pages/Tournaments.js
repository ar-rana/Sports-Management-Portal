import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import TournamentBar from "../components/TournamentBar";
import { db, storage } from "../firebase";
import {
  serverTimestamp,
  query,
  collection,
  orderBy,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { UserContext } from "../UserContext";

const Tournaments = () => {
  const { user } = useContext(UserContext);
  const [tournaments, setTournaments] = useState([]);
  const [open, setOpen] = useState(false);
  const [sport, setSport] = useState(null);

  const [name, setName] = useState("");
  const [tournamentsport, setTournamentSport] = useState("");
  const [start, setstartDate] = useState("");
  const [end, setendDate] = useState("");
  const [description, setDescription] = useState("");

  const origin = "http://localhost:5000";

  useEffect(() => {
    onSnapshot(
      query(collection(db, "tournaments"), orderBy("timeStamp", "desc")),
      (snapshot) => setTournaments(snapshot.docs)
    );
  }, [db]);

  useEffect(()=>{
    if (user){
      console.log("user hai: ",user)
    }
  },[user])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Sport value set to ${sport}`);
    console.log(tournaments.length)
    
    if (sport) {
      const tournamentsCopy = [...tournaments];

      const sportArray = [];
      const otherArray = [];

      tournamentsCopy.forEach(tournament => {
        if (tournament.data().sport.toLowerCase() === sport) {
          sportArray.push(tournament);
        } else {
          otherArray.push(tournament);
        }
      })
      setTournaments(sportArray.concat(otherArray))
    }
  };

  const registerTournament = async (e) => {
    e.preventDefault();
    const collectionref = collection(db, "tournaments");
    const docref = await addDoc(collectionref, {
      name: name,
      sport: tournamentsport.toLowerCase(),
      startingDate: start,
      endingDate: end,
      description: description,
      timeStamp: serverTimestamp(),
    });
    setOpen(false);
    alert("Tournament Registered!!");

    setName("");
    setTournamentSport("");
    setstartDate("");
    setendDate("");
    setDescription("");
  };

  return (
    <div>
      <nav className="bg-green-600 h-16 w-full flex justify-center place-items-center  ">
        <a href="/" title="Home">
          <ArrowLeftIcon className="h-8 bg-white rounded-full absolute w-auto m-2 top-2 left-5 hover:bg-gray-300 hover:shadow-lg cursor-pointer" />
        </a>
        <h1 className="text-sky-50 text-3xl font-medium tracking-wide">
          Tournaments
        </h1>
      </nav>
      <div className="m-4 border-2 p-2 flex items-center">
        <form className="px-7" onSubmit={onSubmitHandler}>
          <span className="font-bold p-2 text-lg pr-4">Filter a Sport</span>
          <select
            name="sports"
            onChange={(e) => setSport(e.target.value)}
            value={sport}
          >
            <option value="">Select</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="swimming">Swimming</option>
            <option value="badminton">Badminton</option>
            {/* keep the values in small case letters */}
          </select>
          <br />
          <br />
          <input
            className="bg-green-600 rounded-3xl w-[120px] font-bold text-white hover:shadow-md h-10"
            type="submit"
            value="Search"
          />
        </form>
        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="bg-green-600 rounded-3xl w-auto h-auto font-bold text-white hover:shadow-md py-1.5 xl:ml-auto md:ml-auto px-4"
        >
          Register a Tournament
        </button>
      </div>
      <div className="bg-white h-auto flex flex-col place-content-center justify-center">
        <div className="flex flex-col items-center my-6 space-y-3 w-auto">
          {tournaments.map((tournament) => (
            <TournamentBar key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
      {open && (
        <Modal
          className="max-w-xl h-auto w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-4 border-green-600 rounded-xl shadow-md"
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
              <form className="space-y-2" onSubmit={registerTournament}>
                <input
                  className="text-black bg-gray-200 w-full p-2 rounded-lg border-2 border-green-500"
                  type="text"
                  placeholder="Enter Name of The Tournament"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-black bg-gray-200 w-full p-2 rounded-lg border-2 border-green-500"
                  type="text"
                  placeholder="Enter The Sport"
                  value={tournamentsport}
                  onChange={(e) => setTournamentSport(e.target.value)}
                />
                <label className="font-semibold m-1 mr-4" for="Start Date">
                  Start Date:
                </label>
                <input
                  className="text-black bg-gray-200 w-[50%] p-2 rounded-lg border-2 border-green-500"
                  type="date"
                  onChange={(e) => setstartDate(e.target.value)}
                />
                <br />
                <label className="font-semibold m-1 mr-6" for="End Date">
                  End Date:
                </label>
                <input
                  className="text-black bg-gray-200 w-[50%] p-2 rounded-lg border-2 border-green-500"
                  type="date"
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
                  className="bg-green-500 p-2 rounded-lg font-medium"
                >
                  Register Tournament
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Tournaments;
