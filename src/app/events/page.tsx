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
      <div className="event-details">
        <h2 className="text-center text-4xl p-40 font-bold">{eventData.title}<div className="text-2xl"> {eventData.date}</div>
        <button className="text-xl relative bg-foreground text-background px-2 py-1 lg:py-0.5 rounded-lg w-fit z-30">
          VIEW ALL PHOTOS
          </button>
          </h2>
        <p className="text-center text-xl">{eventData.description}</p>
        
        <h1 className="text-3xl text-center my-10">
          EVENTS
        </h1>
  
        {/* Photos Section */}
        <div className="photos-container grid grid-cols-3 gap-4 mt-4">
          {eventData.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Event photo ${index}`} className="rounded-lg shadow-md" />
          ))}
        </div>

        {/* Matter Section */}
        <div className="matter px-10 text-xl mt-6">
          <p>{eventData.matter}</p>
        </div>
  
        {/* Videos Section */}
        <div className="videos-container flex justify-around mt-6">
          {eventData.videos.map((video, index) => (
            <video key={index} controls className="rounded-lg shadow-md w-1/3">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
  
      </div>
    );
  };
  

  const yearButtons = Object.keys(eventDetails).map((year) => (
    <button
      key={year}
      onClick={() => handleYearChange(year)}
      className={`bg-foreground text-white rounded-full py-3 px-7 hover:bg-blue-600 transition duration-200 ${
        selectedYear === year ? "bg-blue-600" : "bg-foreground"
      }`}
    >
      {year}
    </button>
  ));

  const eventButtons = Object.keys(eventDetails[selectedYear]).map((event) => (
    <button
      key={event}
      onClick={() => handleEventChange(event)}
      className={`bg-foreground text-white rounded-full py-3 px-7 hover:bg-blue-600 transition duration-200 ${
        selectedEvent === event ? "bg-blue-600" : "bg-foreground"
      }`}
    >
      {event.charAt(0).toUpperCase() + event.slice(1)}
    </button>
  ));

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full">
        {/* Upcoming Events Section */}
        <div className="flex flex-col bg-customGray rounded-b-[100px] min-h-[42rem] pb-20">
          <div className="flex flex-col ml-5 mt-40">
            <div className="font-bold text-center text-3xl">UPCOMING EVENTS</div>
            <UpcomingEventHome {...upcomingEvent} />
          </div>
        </div>

        {/* Past Events Section */}
        <div className="mt-10">
          <div className="font-bold text-center text-4xl">PAST EVENTS</div>

          {/* Year Buttons */}
          <div className="flex justify-center space-x-4 py-5">{yearButtons}</div>

          {/* Event Buttons */}
          <div className="flex bg-foreground text-white flex-row justify-center py-5 mx-40 rounded-[40px] text-lg">
            {eventButtons}
          </div>

          {/* Event Details Section */}
          <div className="mt-10 flex flex-col items-center">
            <div className="mt-4 border-2 border-black rounded-3xl pb-10 mx-10 shadow-lg">{renderPastEvents()}</div>
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
