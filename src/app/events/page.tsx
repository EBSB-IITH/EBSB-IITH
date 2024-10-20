"use client";

import React, { useState } from "react";
import Image from "next/image";
import UpcomingEventHome, { EventDetails } from "@/components/Upcoming-Event-Home";
import { PastEventCard, PastEventCardDetails } from "@/components/Past-Event";
import { PastEvent, PastEvent_details } from "./each-past-event";

let dussheraEvent: EventDetails = {
  title: "DUSSHERA'24",
  description: "The celebration of victory of good over evil",
  date: "2nd Oct to 3rd Oct 2024",
  time: "6:30 - 10:00 PM",
  venue: "Near old mess lawns"
};

let onamPastEventCard2024: PastEvent = {
  title: "ONAM 2024",
  type: "Celebrations",
  year: "2024",
  description:" ",
  matter:" ",
};

let onamPastEventCard2023: PastEvent = {
  title: "ONAM 2023",
  type: "Celebrations",
  year: "2023",
  description:" ",
  matter:" ",
};

let onamPastEventCard2022: PastEvent = {
  title: "ONAM 2022",
  type: "Celebrations",
  year: "2022",
  description:" ",
  matter:" ",
};

let dussheraPastEventCard2023: PastEvent = {
  title: "Dusshera 2023",
  type: "Celebrations",
  year: "2023",
  description:" ",
  matter:" ",
};

let dussheraPastEventCard2022: PastEvent = {
  title: "Dusshera 2022",
  type: "Celebrations",
  year: "2022",
  description:" ",
  matter:" ",
};

let diwaliPastEventCard2023: PastEvent = {
  title: "Diwali 2023",
  type: "Celebrations",
  year: "2023",
  description:" ",
  matter:" ",
};

let diwaliPastEventCard2022: PastEvent = {
  title: "Diwali 2022",
  type: "Celebrations",
  year: "2022",
  description:" ",
  matter:" ",
};

let ethnicPastEventCard2023: PastEvent = {
  title: "Ethnic Night 2023",
  type: "Celebrations",
  year: "2023",
  description:" ",
  matter:" ",
};

let ethnicPastEventCard2022: PastEvent = {
  title: "Ethnic Night 2022",
  type: "Celebrations",
  year: "2022",
  description:" ",
  matter:" ",
};

let holiPastEventCard2023: PastEvent = {
  title: "Holi 2023",
  type: "Celebrations",
  year: "2023",
  description:" ",
  matter:" ",
};

let holiPastEventCard2022: PastEvent = {
  title: "Holi 2022",
  type: "Celebrations",
  year: "2022",
  description:" ",
  matter:" ",
};



export default function EventsPage() {
  const [selectedyear,setselectedyear]=useState("2024");
  const [selectedevent,setselectedevent]=useState("onam");

  const handleyear=(year:string)=>{
    setselectedyear(year);
  }

  const handleevent=(event:string)=>{
    setselectedevent(event);
  }

  const renderPastEvents=()=>{
    if(selectedyear=="2024"){
      if(selectedevent=="onam"){
        return <PastEvent_details {...onamPastEventCard2024} />;
      }else{
        return <>
        <div>Going to happen </div>
        <div>Join with us</div></>
      }
    }else if(selectedyear=="2023"){
      if(selectedevent=="onam"){
        return <PastEvent_details {...onamPastEventCard2023} />;
      }else if(selectedevent=="dusshera"){
        return <PastEvent_details {...dussheraPastEventCard2023} />;
      }else if(selectedevent=="diwali"){
        return <PastEvent_details {...diwaliPastEventCard2023} />;
      }else if(selectedevent=="ethnic"){
        return <PastEvent_details {...ethnicPastEventCard2023} />;
      }else if(selectedevent=="holi"){
        return <PastEvent_details {...holiPastEventCard2023} />;
      }
    }else if(selectedyear=="2022"){
      if(selectedevent=="onam"){
        return <PastEvent_details {...onamPastEventCard2022} />;
      }else if(selectedevent=="dusshera"){
        return <PastEvent_details {...dussheraPastEventCard2022} />;
      }else if(selectedevent=="diwali"){
        return <PastEvent_details {...diwaliPastEventCard2022} />;
      }else if(selectedevent=="ethnic"){
        return <PastEvent_details {...ethnicPastEventCard2022} />;
      }else if(selectedevent=="holi"){
        return <PastEvent_details {...holiPastEventCard2022} />;
      }
    }
  }


  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full ">
      <div className="flex flex-col bg-customGray rounded-b-[100px] min-h-[42rem] pb-20">
        <div className="flex flex-col ml-5 mt-20">
          <div className="flex flex-col ">
            <div className="font-bold text-center text-3xl">UPCOMING EVENTS</div>
            <UpcomingEventHome {...dussheraEvent} />
          </div>
        </div>
      </div>
      <div className="mt-10">

        <div className="font-bold text-center text-4xl">PAST EVENTS</div>
            <div className="flex justify-center space-x-4 py-5">
              <button onClick={() => handleyear("2024")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedyear === "2024" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>2024</button>
              <button onClick={() => handleyear("2023")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedyear === "2023" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>2023</button>
              <button onClick={() => handleyear("2022")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedyear === "2022" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>2022</button>
            </div>

            <div className={'flex bg-foreground text-white flex-row justify-center py-5 mx-40 rounded-[40px] *:px-12 text-lg'}>
			        <button onClick={() => handleevent("onam")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedevent === "onam" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>Onam</button>
			        <button onClick={() => handleevent("dusshera")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedevent === "duushera" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>Dusshera</button>
			        <button onClick={() => handleevent("diwali")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedevent === "diwali" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>Diwali</button>
			        <button onClick={() => handleevent("ethnic")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedevent === "ethnic" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>Ethnic Night</button>
			        <button onClick={() => handleevent("holi")} className={`bg-foreground  text-white rounded-full mt-3 py-3 px-7 hover:bg-blue-600 transition duration-200 ${
                selectedevent === "holi" ? "bg-blue-600 text-white" : "bg-foreground text-white"}`}>Holi</button>
		        </div>

          <div className="mt-10 flex flex-col items-center">
            <div className="mt-4">
              {renderPastEvents()}
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
