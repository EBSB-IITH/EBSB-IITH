"use client";

import React, { useState } from "react";
import Image from "next/image";
import UpcomingEventHome, { EventDetails } from "./upcoming-event";
import { PastEventCard, PastEventCardDetails } from "@/components/Past-Event";
import { PastEvent, eventDetails, PastEvent_details } from "./each-past-event";
import Carousel from "@/components/Carousel";

export const upcomingEvent: EventDetails = {
  title: "DUSSHERA'24",
  description: "The celebration of victory of good over evil",
  date: "2nd Oct to 3rd Oct 2024",
  time: "6:30 - 10:00 PM",
  venue: "Near old mess lawns"
};

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
      <div className="event-details border-2 border-foreground rounded-3xl shadow-lg bg-[#FAF5EA] mx-auto w-full lg:max-w-7xl px-5 lg:px-0">
        <h2 className="text-center flex justify-around border-black bg-foreground text-white rounded-3xl text-2xl lg:text-6xl pt-10 lg:pt-32 font-bold relative">
          <div
            className="absolute top-0 right-0 h-full w-full bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/photos/design1.png')`,
              backgroundSize: "30%",
              backgroundPosition: "top left"
            }}
          ></div>
          <div
            className="absolute top-0 right-0 h-full w-full bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/photos/design2.png')`,
              backgroundSize: "30%",
              backgroundPosition: "top right"
            }}
          ></div>
          <div className="flex z-20 items-end">
            <img src="/photos/tree2.png" alt="Event photo 3" className="w-24 lg:w-80 object-cover" />
            <img src="/photos/bowl.png" alt="Bowl photo" className="w-10 lg:w-20 object-cover -ml-12 lg:-ml-36" />
          </div>
          <div>
            <div>{eventData.title}</div>
            <div className="text-lg lg:text-2xl">{eventData.date}</div>
            <button className="text-sm lg:text-xl relative bg-background text-foreground border-2 border-white px-2 py-1 mt-10 lg:mt-28 lg:py-0.5 rounded-lg w-fit z-30">
              VIEW ALL PHOTOS
            </button>
          </div>
          <img src="/photos/tree1.png" alt="Event photo 3" className="w-24 lg:w-80 z-20 object-cover" />
        </h2>

        <p className="text-center text-lg lg:text-xl px-5 lg:px-20 py-10 lg:py-16">{eventData.description}</p>

        <h1 className="text-xl lg:text-3xl font-bold text-center my-5">EVENTS</h1>

        <div className="matter pt-0 p-5 lg:p-20 text-lg lg:text-xl">
          <p>{eventData.matter1}</p>
        </div>

        <div className="photos-container overflow-hidden mt-4">
          <div className="flex space-x-4 lg:px-5 overflow-x-auto scrollbar-hidden">
            {eventData.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Event photo ${index}`}
                className="shadow-md h-40 lg:h-80 w-auto flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="matter p-5 lg:p-20 text-lg lg:text-xl">
          <p>{eventData.matter2}</p>
        </div>

        <div className="videos-container flex flex-wrap w-full justify-around mt-6">
          {eventData.videos.map((video, index) => (
            <div key={index} className="video-wrapper w-full lg:w-full box-border rounded-3xl">
              <video controls className="rounded-3xl shadow-md w-full">
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
      className={`relative border-foreground text-lg lg:text-xl px-6 lg:px-8 py-2 lg:py-3 rounded-3xl w-fit z-30 hover:bg-foreground hover:text-white transition duration-200 ${selectedYear === year ? "bg-white font-bold text-foreground" : "bg-white border-2 text-foreground"
        }`}
    >
      {year}
    </button>
  ));

  const eventButtons = Object.keys(eventDetails[selectedYear]).map((event) => (
    <button
      key={event}
      onClick={() => handleEventChange(event)}
      className={`relative px-6 lg:px-8 py-2 lg:py-3 rounded-3xl w-fit z-30 hover:bg-foreground hover:text-white transition duration-200 ${selectedEvent === event
        ? "bg-white text-foreground font-bold text-lg lg:text-2xl"
        : "bg-white text-foreground text-base lg:text-xl"
        }`}
    >
      {event.charAt(0).toUpperCase() + event.slice(1)}
    </button>
  ));

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full">

        <div className="relative flex flex-col">
          {/* Lamp Section */}
          <div
            className="absolute lg:hidden inset-0 z-20 bg-no-repeat bg-cover flex justify-between items-end lg:justify-end"
            style={{
              backgroundSize: "25%",
              paddingRight: "0rem",
              paddingBottom: "0rem", // Reduced padding at the bottom for lamps
            }}
          >
            {/* Lamps positioned for mobile (one in each corner) */}
            <div className="flex justify-between w-full px-5 lg:hidden lg:px-0 lg:space-x-4 items-end z-20">
              <div
                className="bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/photos/lamps2.png')`,
                  width: "90px", // Adjust size for mobile
                  height: "70px", // Adjust size for mobile
                  backgroundPosition: "bottom left", // Lamp on left for mobile
                }}
              ></div>

              <div
                className="bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/photos/lamps1.png')`,
                  width: "90px", // Adjust size for mobile
                  height: "70px", // Adjust size for mobile
                  backgroundPosition: "bottom right", // Lamp on right for mobile
                }}
              ></div>
              </div>
            </div>

          <div
            className="absolute inset-0 z-20 bg-no-repeat bg-cover flex justify-between items-end lg:justify-end"
            style={{
              backgroundSize: "25%",
              paddingRight: "4rem",
              paddingBottom: "2.5rem", // Reduced padding at the bottom for lamps
            }}
          >

            {/* Lamps for desktop screens */}
            <div className="hidden lg:flex space-x-4 items-end z-20">
              <div
                className="bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/photos/lamps2.png')`,
                  width: '220px', // Adjust width and height as needed
                  height: '160px',
                  backgroundPosition: 'bottom right',
                }}
              ></div>

              <div
                className="bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/photos/lamps1.png')`,
                  width: '300px', // Adjust width and height as needed
                  height: '220px',
                  backgroundPosition: 'bottom right',
                }}
              ></div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="relative h-[40vh] lg:h-[86vh] w-full flex flex-col items-center lg:items-start bg-[#611D42] text-background p-8 lg:pt-32  opacity-96 z-10">
            {/* Background images for decorations */}
            <div
              className="absolute top-0 right-0 h-full w-full bg-no-repeat"
              style={{
                backgroundImage: `url('/photos/flowers1.png')`,
                backgroundSize: "30%",
                backgroundPosition: "top right",
              }}
            ></div>

            <div
              className="absolute bottom-0 left-0 h-full w-full bg-no-repeat"
              style={{
                backgroundImage: `url('/photos/flowers2.png')`,
                backgroundSize: "30%",
                backgroundPosition: "left bottom",
              }}
            ></div>

            {/* Upcoming event details */}
            <div className="relative mb-10 mt-10 lg:mt-0 z-10 w-full">
              <div className="text-[1.5rem] lg:text-[2rem] font-bold leading-[2rem] lg:leading-[3.5rem] text-center">
                UPCOMING EVENTS
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <UpcomingEventHome {...upcomingEvent} />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative h-[6vh] lg:h-[14vh] w-full">
            <div className="h-full rounded-b-full w-full bg-[#540630] z-10"></div>
          </div>
        </div>


        <div className="mt-5 lg:mt-10">
          <div className="font-bold text-center text-3xl lg:text-4xl">PAST EVENTS</div>

          <div className="hidden lg:flex justify-center space-x-2 lg:space-x-4 py-5">
            {yearButtons}
          </div>

          <div className="hidden lg:flex bg-white text-white flex-row justify-evenly py-5 mx-5 lg:mx-60 rounded-[40px] text-base lg:text-lg">
            {eventButtons}
          </div>

          {/* Mobile view - Dropdowns for year and event */}
          <div className="lg:hidden w-full px-5">
            <div className="flex gap-3 mt-5">

              {/* Year dropdown */}
              <div className="w-1/2">
                {/* <label htmlFor="year" className="block text-lg font-bold mb-2 text-center">
                  Select Year
                </label> */}
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="block w-full px-4 py-2 border  border-foreground bg-[#FAF5EA] rounded-lg focus:ring-2 focus:ring-foreground focus:outline-none"
                >
                  {Object.keys(eventDetails).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event dropdown */}
              <div className="w-1/2">
                {/* <label htmlFor="event" className="block text-lg font-bold mb-2 text-center">
                  Select Event
                </label> */}
                <select
                  id="event"
                  value={selectedEvent}
                  onChange={(e) => handleEventChange(e.target.value)}
                  className="block w-full px-4 py-2 border border-foreground bg-[#FAF5EA] rounded-lg focus:ring-2 focus:ring-foreground focus:outline-none"
                >
                  {Object.keys(eventDetails[selectedYear]).map((event) => (
                    <option key={event} value={event}>
                      {event.charAt(0).toUpperCase() + event.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>


          <div className="mt-10 flex flex-col items-center">
            <div className="mt-4">{renderPastEvents()}</div>
          </div>
        </div>

        <div className="flex flex-col mt-12">
          <div className="mx-auto font-bold text-xl lg:text-3xl">PAST EVENTS</div>
          <Carousel />
        </div>
      </div>
    </main>
  );
}
