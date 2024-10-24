"use client";

import React, { useState } from "react";
import Image from "next/image";
import UpcomingEventHome, { EventDetails } from "./upcoming-event";
import { PastEventCard, PastEventCardDetails } from "@/components/Past-Event";
import { PastEvent,eventDetails, PastEvent_details } from "./each-past-event";
import Carousel from "@/components/Carousel";

export const upcomingEvent:EventDetails = {
	title: "DUSSHERA'24",
	description: "The celebration of victory of good over evil",
	date: "2nd Oct to 3rd Oct 2024",
	time: "6:30 - 10:00 PM",
	venue: "Near old mess lawns"
}

// Data for past events
const eventsData: { [year: string]: PastEvent[] } = {
	"2024": [
		{ title: "ONAM 2024", type: "Celebrations", year: "2024", description: "", matter: "" },
	],
	"2023": [
		{ title: "ONAM 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
		{ title: "Dusshera 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
		{ title: "Diwali 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
		{ title: "Ethnic Night 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
		{ title: "Holi 2023", type: "Celebrations", year: "2023", description: "", matter: "" }
	],
	"2022": [
		{ title: "ONAM 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
		{ title: "Dusshera 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
		{ title: "Diwali 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
		{ title: "Ethnic Night 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
		{ title: "Holi 2022", type: "Celebrations", year: "2022", description: "", matter: "" }
	]
};

// Main events page component
export default function EventsPage() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedEvent, setSelectedEvent] = useState("onam");

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedEvent("onam"); // Set first event as selected on year change
  };

  const handleEventChange = (event: string) => {
    setSelectedEvent(event);
  };

  const renderPastEvents = () => {
    const eventData = eventDetails[selectedYear]?.[selectedEvent.toLowerCase()];
    if (!eventData) return <div>No details available</div>;
  
    return (
      <div className="event-details border-2 border-black rounded-3xl shadow-lg bg-white mx-auto max-w-7xl">
        <h2 className="text-center border-2 border-black bg-foreground text-white rounded-3xl text-6xl pt-40 pb-28 font-bold">
          {eventData.title}
          <div className="text-2xl">{eventData.date}</div>
          <button className="text-xl relative bg-background text-foreground border-2 border-white px-2 py-1 mt-28 lg:py-0.5 rounded-lg w-fit z-30">
            VIEW ALL PHOTOS
          </button>
        </h2>
  
        <p className="text-center text-xl px-20 py-20">{eventData.description}</p>
  
        <h1 className="text-3xl font-bold text-center my-10">EVENTS</h1>
  
        {/* Matter Section */}
        <div className="matter p-20 text-xl">
          <p>{eventData.matter1}</p>
        </div>
  
        {/* Photos Section */}
        <div className="photos-container overflow-hidden mt-4">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hidden">
            {eventData.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Event photo ${index}`}
                className="rounded-lg shadow-md h-80 w-auto flex-shrink-0" // Set height and allow width to auto adjust
              />
            ))}
          </div>
        </div>

  
        {/* Matter Section */}
        <div className="matter p-20 text-xl ">
          <p>{eventData.matter2}</p>
        </div>
  
        {/* Videos Section */}
        <div className="videos-container flex flex-wrap w-full justify-around mt-6">
          {eventData.videos.map((video, index) => (
            <div key={index} className="video-wrapper w-full box-border rounded-3xl">
              <video controls className="rounded-3xl shadow-md w-full ">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  

  const yearButtons = Object.keys(eventDetails).map((year) => (
    <button
      key={year}
      onClick={() => handleYearChange(year)}
      className={`relative  border-foreground text-xl  px-8 py-3 lg:py-2 rounded-3xl w-fit z-30 hover:bg-foreground hover:text-white transition duration-200 ${
        selectedYear === year ? "bg-white font-bold text-foreground" : "bg-white border-2 text-foreground"
      }`}
    >
      {year}
    </button>
  ));

  const eventButtons = Object.keys(eventDetails[selectedYear]).map((event) => (
    <button
      key={event}
      onClick={() => handleEventChange(event)}
      className={`relative px-8 py-3 lg:py-2 rounded-3xl w-fit z-30 hover:bg-foreground hover:text-white transition duration-200 ${
        selectedEvent === event 
          ? "bg-white text-foreground font-bold text-2xl"  // Selected button styles
          : "bg-white text-foreground text-xl"  // Unselected button styles
      }`}
    >
      {event.charAt(0).toUpperCase() + event.slice(1)}
    </button>
  ));

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full">
        {/* Upcoming Events Section */}

        <div className="flex flex-col *:mx-auto bg-foreground text-background rounded-b-[4rem] lg:rounded-b-[8rem] h-[26rem] lg:h-[44rem] pt-[2rem] relative">
        <div className="flex flex-col *:mx-auto mt-24 lg:mt-52">
          <div className="text-[2rem] lg:text-[3.4rem] font-extrabold w-[20rem] lg:w-[32rem] text-center leading-[2rem] lg:leading-[3.5rem] ">UPCOMING EVENTS</div>
          {/* <div className="text-center w-[20rem] lg:w-[40rem] pt-8">" Sardar Patel gave us Ek Bharat, it is now the solemn duty of 125 crore Indians to collectively make Shrestha Bharat. "</div> */}
        </div>
        
      </div>


        <div className="flex flex-col bg-customGray rounded-b-[100px] min-h-[42rem] pb-20">
          <div className="flex flex-col ml-5 mt-40">
            <UpcomingEventHome {...upcomingEvent} />
          </div>
        </div>

        {/* Past Events Section */}
        <div className="mt-10">
          <div className="font-bold text-center text-4xl">PAST EVENTS</div>

          {/* Year Buttons */}
          <div className="flex justify-center space-x-4 py-5">{yearButtons}</div>

          {/* Event Buttons */}
          <div className="flex bg-white text-white flex-row justify-center py-5 mx-48 rounded-[40px] text-xlg">
            {eventButtons}
          </div>

          {/* Event Details Section */}
          <div className="mt-10 flex flex-col items-center">
            <div className="mt-4 ">{renderPastEvents()}</div>
          </div>
        </div>

        <div className="flex flex-col mt-12">
        <div className="mx-auto font-bold text-2xl lg:text-3xl">PAST EVENTS</div>
        <Carousel />
      </div>
      </div>
    </main>
  );
}
