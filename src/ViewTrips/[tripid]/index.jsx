import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { db } from "@/config/FirebaseConfig";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacetoVisit from "../components/PlacetoVisit";
import Footer from "../components/Footer";

const index = () => {
  const { tripid } = useParams();
  const [trip, settrip] = useState([]);
  useEffect(() => {
    tripid && GetTripdata();
  }, [tripid]);
  const GetTripdata = async () => {
    const docref = doc(db, "AITrips", tripid);
    const docsnap = await getDoc(docref);

    if (docsnap.exists()) {
      console.log(docsnap.data());
      settrip(docsnap.data());
    } else {
      console.log("No such document");
      toast("No trip found");
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip} />
      <Hotels trip={trip} />
      <PlacetoVisit trip={trip} />
      <Footer trip={trip} />
    </div>
  );
};

export default index;
