"use client";

import React, { useState } from "react";
import Image from "next/image";
import UpcomingEventHome, { EventDetails } from "./upcoming-event";
import { PastEventCard, PastEventCardDetails } from "@/components/Past-Event";
import { PastEvent,eventDetails, PastEvent_details } from "./each-past-event";

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
  const [selectedEvent, setSelectedEvent] = useState(eventDetails["2024"].onam.title);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedEvent(eventDetails[year]?.onam?.title || ""); // Set first event as selected on year change
  };

  const handleEventChange = (event: string) => {
    setSelectedEvent(event);
  };

  const renderPastEvents = () => {
    const eventData = eventDetails[selectedYear]?.[selectedEvent.toLowerCase()];
    if (!eventData) return <div>No details available</div>;

    return (
      <div className="event-details">
        <h2 className="text-center text-2xl font-bold">{eventData.title}</h2>
        <p className="text-center">{eventData.description}</p>

        {/* Photos Section */}
        <div className="photos-container grid grid-cols-3 gap-4 mt-4">
          {eventData.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Event photo ${index}`} className="rounded-lg shadow-md" />
          ))}
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

        {/* Matter Section */}
        <div className="matter mt-6">
          <p>{eventData.matter}</p>
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
          <div className="flex flex-col ml-5 mt-20">
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
            <div className="mt-4">{renderPastEvents()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
