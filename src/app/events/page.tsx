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
}



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
      <div className="event-details border-2 border-foreground rounded-3xl shadow-lg bg-white mx-auto max-w-7xl w-[1500px]">
        <h2 className="text-center flex justify-around border-black bg-foreground text-white rounded-3xl text-6xl pt-32 font-bold relative">
          {/* Background Image */}
          <div
            className="absolute top-0 right-0 h-full w-full bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/photos/design1.png')`,
              backgroundSize: '30%',
              backgroundPosition: 'top left',
            }}
          ></div>
          <div
            className="absolute top-0 right-0 h-full w-full bg-no-repeat z-0"
            style={{
              backgroundImage: `url('/photos/design2.png')`,
              backgroundSize: '30%',
              backgroundPosition: 'top right',
            }}
          ></div>
          <div className="flex z-20 items-end">
            <img src="/photos/tree2.png" alt="Event photo 3" className="w-150px object-cover" />
            <img src="/photos/bowl.png" alt="Bowl photo" className="w-80px object-cover -ml-36" />
          </div>
          <div>
            <div>{eventData.title}</div>
            <div className="text-2xl">{eventData.date}</div>
            <button className="text-xl relative bg-background text-foreground border-2 border-white px-2 py-1 mt-28 lg:py-0.5 rounded-lg w-fit z-30">
              VIEW ALL PHOTOS
            </button>
          </div>
          <img src="/photos/tree1.png" alt="Event photo 3" className="w-150px z-20 object-cover" />
        </h2>

        <p className="text-center text-xl px-20 py-16">{eventData.description}</p>

        <h1 className="text-3xl font-bold text-center my-5">EVENTS</h1>

        {/* Matter Section */}
        <div className="matter pt-0 p-20 text-xl">
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
                className="shadow-md h-80 w-auto flex-shrink-0" // Set height and allow width to auto adjust
              />
            ))}
          </div>
        </div>

        {/* Matter Section */}
        <div className="matter p-20 text-xl">
          <p>{eventData.matter2}</p>
        </div>

        {/* Videos Section */}
        <div className="videos-container flex flex-wrap w-full justify-around mt-6">
          {eventData.videos.map((video, index) => (
            <div key={index} className="video-wrapper w-full box-border rounded-3xl">
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
      className={`relative  border-foreground text-xl  px-8 py-3 lg:py-2 rounded-3xl w-fit z-30 hover:bg-foreground hover:text-white transition duration-200 ${selectedYear === year ? "bg-white font-bold text-foreground" : "bg-white border-2 text-foreground"
        }`}
    >
      {year}
    </button>
  ));

  const eventButtons = Object.keys(eventDetails[selectedYear]).map((event) => (
    <button
      key={event}
      onClick={() => handleEventChange(event)}
      className={`relative px-8 py-3 lg:py-2 rounded-3xl w-fit z-30 hover:bg-foreground hover:text-white transition duration-200 ${selectedEvent === event
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

        <div className="relative min-h-screen flex flex-col">
          {/* Main background image (lamps1.png) shared across both sections */}
          <div
            className="absolute inset-0 z-20 bg-no-repeat bg-cover flex justify-end items-end"
            style={{
              backgroundSize: '25%', // Adjust this based on your needs
              paddingRight: '7rem',  // Optional padding to move lamps from the right edge
              paddingBottom: '3rem', // Optional padding to move lamps from the bottom edge
            }}
          >
            {/* Wrap both lamps in the same container and align them adjacent to each other */}
            <div className="flex space-x-4 items-end z-20">
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



          {/* Top 86% section */}
          <div className="relative h-[86vh] w-full flex flex-col items-center bg-[#611D42] text-background pt-32 opacity-95 z-10">
            {/* Background image 1 */}
            <div
              className="absolute top-0 right-0 h-full w-full bg-no-repeat"
              style={{
                backgroundImage: `url('/photos/flowers1.png')`,
                backgroundSize: '30%',
                backgroundPosition: 'top right',
              }}
            ></div>

            {/* Background image 2 */}
            <div
              className="absolute bottom-0 left-0 h-full w-full bg-no-repeat"
              style={{
                backgroundImage: `url('/photos/flowers2.png')`,
                backgroundSize: '30%',
                backgroundPosition: 'left bottom',
              }}
            ></div>

            {/* Content that appears on top of the background */}
            <div className="relative z-10 w-full">
              <div className="text-[2rem] lg:text-[2rem] font-bold leading-[2rem] text-center lg:leading-[3.5rem]">UPCOMING EVENTS</div>
              <div className="w-full justify-start ">
              <UpcomingEventHome {...upcomingEvent} />
            </div>
            </div>
            
          </div>

          {/* Bottom 14% section */}
          <div className="relative h-[14vh] w-full">
            <div className="h-full rounded-b-full w-full bg-[#540630] z-10"></div>
          </div>
        </div>


        {/* Past Events Section */}
        <div className="mt-10">
          <div className="font-bold text-center text-4xl">PAST EVENTS</div>

          {/* Year Buttons */}
          <div className="flex justify-center space-x-4 py-5">{yearButtons}</div>

          {/* Event Buttons */}
          <div className="flex bg-white text-white flex-row justify-evenly py-5 mx-60 rounded-[40px] text-xlg">
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
