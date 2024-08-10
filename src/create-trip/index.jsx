import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatSession } from "@/config/AImodel";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  selectTravelList,
} from "@/constant/options";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";

const Index = () => {
  const [place, setPlace] = useState("");
  const [days, setDays] = useState("");
  const [formdata, setformdata] = useState([]);
  const [opendailog, setOpendailog] = useState(false);

  const handleInputchange = (name, value) => {
    setformdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    console.log(formdata);
  }, [formdata]);

  const login = useGoogleLogin({
    onSuccess: (user) => console.log(user),
    onError: (error) => console.log(error),
  });
 
  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpendailog(true);
      return;
    }
    if (
      (formdata?.days > 5 && !formdata?.place) ||
      !formdata?.budget ||
      !formdata?.people
    ) {
      toast("Please fill all the fields");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace("{place}", formdata?.place)
      .replace("{days}", formdata?.days)
      .replace("{people}", formdata?.people)
      .replace("{budget}", formdata?.budget)
      .replace("{days}", formdata?.days);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl justify-center flex mb-4">
        Tell us your travel preferences
      </h2>
      <p className="mt-3 text-gray-500 text-xl justify-center flex">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is the destination of your choice?
          </h2>
          <Input
            placeholder="Surat"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onBlur={(e) => handleInputchange("place", e.target.value)}
            aria-label="Destination of your choice"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          How many days are you planning your trip?
        </h2>
        <Input
          placeholder="Ex 3"
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          onBlur={(e) => handleInputchange("days", e.target.value)}
          aria-label="Number of days for the trip"
        />
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputchange("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formdata?.budget === item.title && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {selectTravelList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputchange("people", item.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-md1 ${
                formdata?.people === item.people && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>

      <Dialog open={opendailog}>
        
        <DialogContent>
          <DialogHeader>
            
            <DialogDescription>
             <img src="logo.svg" />
             <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
             <Button
             onClick={login}
              className="w-full mt-5 flex gap-4 items-center">
             <FcGoogle className="h-7 w-7"/>
              Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
