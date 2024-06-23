import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Moment from "react-moment";
import { UserContext } from "../UserContext";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadString } from "firebase/storage";

const Details = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const location = useLocation();
  const { tournamentData } = location.state;

  const [registrations, setRegistrations] = useState();
  const [isregistered, setIsregistered] = useState(false);
  const fileChosser = useRef(null);
  const [images, setImages] = useState(null);

  const timeStampDate = new Date(tournamentData.timeStamp.seconds * 1000);

  const register = async () => {
    if (user) {
      await addDoc(collection(db, "tournaments", id, "registered"), {
        userID: user.id,
        usersName: user.name,
      });
    } else {
      alert("login to register");
    }
  };

  const unregister = async () => {
    if (user) {
      const q = query(
        collection(db, "tournaments", id, "registered"),
        where("userID", "==", user.id)
      );
      const querysnapsnot = await getDocs(q);

      querysnapsnot.forEach(
        async (entry) =>
          await deleteDoc(doc(db, "tournaments", id, "registered", entry.id))
      );
      setIsregistered(false);
    }
  };

  const getBase64 = async (e) => {
    if (!user) {
      return;
    }
    if (user.position === "Faculty") {
      const reader = new FileReader();
      const file = e.target.files[0];
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = async (readerEvent) => {
          console.log(readerEvent.target.result);
          const imageBase64 = readerEvent.target.result;

          const images = ref(storage, `images/${id}`);
          const listofimages = await listAll(images);
          const listlength = listofimages.items.length;

          const imageref = ref(storage, `images/${id}/${listlength + 1}`);
          await uploadString(imageref, imageBase64, "data_url").then(
            async () => {
              const imageURL = await getDownloadURL(imageref);
              console.log(imageURL);
            }
          );
        };
      }
    } else {
      alert("Only Internal Members and Organizers are Allowed to Upload Images")
    }
  };

  const getImages = async () => {
    const listofImages = await listAll(ref(storage, `images/${id}`));
    const allitems = listofImages.items;

    if (!allitems) {
      return;
    }

    const urls = await Promise.all(
      allitems.map((imageRef) => getDownloadURL(imageRef))
    );
    setImages(urls);
  };

  useEffect(() => {
    onSnapshot(
      query(collection(db, "tournaments", id, "registered")),
      (snapshot) => {
        const Querydocs = snapshot.docs;
        if (
          user &&
          Querydocs.findIndex((doc) => doc.data().userID === user.id) !== -1
        ) {
          setIsregistered(true);
        }
        setRegistrations(Querydocs.length);
      }
    );
    getImages();
  }, [user]);

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
              <span>Updated By: {tournamentData.organizer}</span>
              <span>Registered: {registrations}</span>
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
            <br />
            {isregistered ? (
              <button
                onClick={unregister}
                className="w-max py-1.5 px-3 mt-auto rounded-full bg-white text-black font-bold hover:shadow-xl hover:bg-green-100"
              >
                Unregister
              </button>
            ) : (
              <button
                onClick={register}
                className="w-max py-1.5 px-3 mt-auto rounded-full bg-white text-black font-bold hover:shadow-xl hover:bg-green-100"
              >
                Register for Tournament
              </button>
            )}
            <div className="mt-auto ml-auto mr-6">
              <p className="text-md text-white hover:text-base  xl:text-sm md:text-sm">
                Created: <Moment fromNow>{timeStampDate}</Moment>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <p className="mr-auto ml-6 font-medium xl:text-3xl md:text-3xl text-xl mt-3 text-white">
              Images:
              {user ? (
                ""
              ) : (
                <span className="text-sm text-red-600">
                  <br />
                  'login to upload images'
                </span>
              )}
            </p>
            <div className="flex overflow-x-scroll w-[90%] mr-auto ml-auto m-5 space-x-4 p-4">
              {images &&
                images.map((url, index) => (
                  <a href={url} target="_blank">
                    <img key={index} src={url} width="250" />
                  </a>
                ))}
            </div>
            {user && (
              <div className="mr-auto ml-6 w-max py-1.5 px-3 rounded-full bg-white text-black font-bold hover:shadow-xl hover:bg-green-100 mt-5">
                <button onClick={() => fileChosser.current.click()}>
                  Upload Image
                </button>
                <input
                  hidden
                  ref={fileChosser}
                  onClick={() => {
                    if (!user) {
                      return alert("login to upload insites");
                    }
                  }}
                  onChange={getBase64}
                  type="file"
                />
              </div>
            )}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Details;
