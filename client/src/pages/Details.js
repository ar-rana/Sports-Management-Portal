import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Moment from "react-moment";
import { UserContext } from "../UserContext";

const Details = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const location = useLocation();
  const { tournamentData } = location.state;

  const timeStampDate = new Date(tournamentData.timeStamp.seconds * 1000);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="flex flex-col items-center w-full h-auto">
        <div className="xl:w-[75%] md:w-[75%] w-[90%] min-h-[650px] bg-green-600 h-auto flex flex-col items-center text-white m-2 mt-10 rounded-3xl shadow-lg shadow-slate-400">
          <h1 className="font-semibold xl:text-3xl md:text-3xl text-xl mt-3 px-8 py-1.5 rounded-lg bg-white text-black">
            Details :
          </h1>
          <div className="flex flex-col items-center w-[98%]">
            <h2 className="font-bold xl:text-3xl md:text-3xl text-xl p-1">
              {tournamentData.name.toUpperCase()}
            </h2>
            <h3 className="font-semibold text-gray-200">
              {tournamentData.sport.toUpperCase()}
            </h3>
            <br />
            <div className="flex w-full justify-between font-semibold p-6 mx-2">
              <span>Organized By: someone(for now)</span>
              <span>Registered: someNumber(for now)</span>
            </div>
            <div className="mr-auto ml-6 font-semibold p-3 space-y-2">
              <h2 className="hover:underline">
                Tournament Starts at: {tournamentData.startingDate}
              </h2>
              <h2 className="hover:underline">
                Tournament Ends at: {tournamentData.endingDate}
              </h2>
            </div>
            <div className="mt-5 mr-auto ml-6 p-3">
              <p className="font-medium text-lg">
                {tournamentData.description}
              </p>
            </div>
            <br/>
            <button className="w-max py-1.5 px-3 mt-auto rounded-full bg-white text-black font-bold hover:shadow-xl hover:bg-green-100" >
              Register for Tournament
            </button>
            <div className="mt-auto ml-auto mr-6">
              <p className="text-md text-white hover:text-base xl:text-sm md:text-sm">
                Created: <Moment fromNow>{timeStampDate}</Moment>
              </p>
            </div>
          </div>
          <div className="mr-auto ml-6">
              <p className="font-medium xl:text-3xl md:text-3xl text-xl mt-3 text-white">Images: </p>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Details;
