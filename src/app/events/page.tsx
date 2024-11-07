"use client";

import React, { useState } from "react";
import UpcomingEventHome, { EventDetails } from "./upcoming-event";
import { eventDetails } from "./each-past-event";
import Carousel from "@/components/Carousel";
import Link from "next/link";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const upcomingEvent: EventDetails = {
  title: "KHUSHIYON WALI DIWALI '24",
  description: "Diwali Celebrations and Garba Night at IITH",
  date: "30 Oct to 1 Nov 2024",
  time: "6:30 PM Onwards",
  venue: "Near old mess lawns"
};

export default function Page() {
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
      <div className="event-details border border-foreground rounded-3xl shadow-lg bg-[#FAF5EA] mx-3 w-full max-w-[90vw] lg:max-w-7xl lg:px-0 overflow-hidden">
        <h2 className="text-center flex justify-between border-black bg-foreground text-white rounded-3xl text-2xl lg:text-6xl pt-10 lg:pt-32 font-bold relative h-[200px] lg:h-[600px]">
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

          <div className="flex w-full justify-between items-center">
            {selectedEvent === "onam" ? (
              <div className="relative w-full flex items-center">
                <div className="relative flex items-center">
                  <img
                    src="/photos/tree2.png"
                    alt="Event photo 3"
                    className="w-24 lg:h-full lg:w-80 object-cover"
                  />
                  <img
                    src="/photos/bowl.png"
                    alt="Bowl photo"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 lg:w-20 object-cover"
                  />
                </div>
                <div className="flex-grow text-center">
                  <div className="text-lg lg:text-6xl font-bold text-center">
                    {eventData.title}
                  </div>
                  <div className="text-sm lg:text-xl text-center">
                    {eventData.date}
                  </div>
                  <Link href="/gallery" passHref>
                    <button className="text-sm lg:text-xl font-semibold relative bg-background text-foreground border-2 border-white p-2 mb-4 mt-10 lg:mt-28 rounded-lg w-fit ">
                      VIEW ALL PHOTOS
                    </button>
                  </Link>
                </div>

                <img
                  src={eventData.label_photos[1]}
                  alt="Event photo 3"
                  className="w-24 lg:w-80 z-10 object-cover"
                />
              </div>
            ) : selectedEvent === "ethnicnight" ? (
              <div className="flex w-full items-center pb-5 ">
                <img
                  src={eventData.label_photos[0]}
                  alt="Other Event"
                  className="absolute lg:left-[4rem] bottom-[rem] lg:bottom-[9rem] scale-[0.70] lg:scale-[2.6] pl-3 lg:pl-12 object-cover"
                />
                <div className="flex-grow pl-20 lg:pl-80 text-center">
                  <div className="text-lg lg:text-6xl font-bold text-center">
                    {eventData.title}
                  </div>
                  <div className="text-sm lg:text-xl text-center">
                    {eventData.date}
                  </div>
                  <Link href="/gallery" passHref>
                    <button className="text-sm lg:text-xl font-semibold relative bg-background text-foreground border-2 border-white p-2 mb-4 mt-10 lg:mt-28 rounded-lg w-fit">
                      VIEW ALL PHOTOS
                    </button>
                  </Link>
                </div>
                <img
                  src={eventData.label_photos[1]}
                  alt="Event photo 3"
                  className="w-20 lg:w-80 z-10 object-cover"
                />
              </div>
            ) : (
              <div className="flex w-full items-center">
                <img
                  src={eventData.label_photos[0]}
                  alt="Other Event"
                  className="w-20 lg:w-80 object-cover"
                />
                <div className="flex-grow text-center">
                  <div className="text-lg lg:text-6xl font-bold text-center">
                    {eventData.title}
                  </div>
                  <div className="text-sm lg:text-xl text-center">
                    {eventData.date}
                  </div>
                  <Link href="/gallery" passHref>
                    <button className="text-sm lg:text-xl font-semibold relative bg-background text-foreground border-2 border-white p-2 mb-4 mt-10 lg:mt-28 rounded-lg w-fit">
                      VIEW ALL PHOTOS
                    </button>
                  </Link>
                </div>

                <img
                  src={eventData.label_photos[1]}
                  alt="Event photo 3"
                  className="w-20 lg:w-80 z-10 object-cover"
                />
              </div>
            )}

          </div>


        </h2>

        <p className="normal-text text-center text-lg lg:text-xl px-5 lg:px-20 py-10 lg:py-16">{eventData.description}</p>

        <h1 className="text-xl lg:text-3xl font-bold text-center my-5">EVENTS</h1>

        <div className="normal-text matter pt-0 p-5 lg:p-20 text-lg lg:text-xl">
          <p>{eventData.matter1}</p>
        </div>

        <div className="photos-container overflow-hidden mt-4">
          <div className="flex space-x-4 px-3 lg:px-5 overflow-x-auto scrollbar-hidden">
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

        <div className="normal-text matter p-5 lg:p-20 text-lg lg:text-xl">
          <p>{eventData.matter2}</p>
        </div>

        {eventData.videos[0] !== "" ? (
          <div className="videos-container flex flex-wrap w-full justify-around mt-6">
            {eventData.videos.map((video, index) => (
              <div key={index} className="video-wrapper w-full lg:w-full box-border rounded-3xl">
                {/* Check if the link is a YouTube URL */}
                {video.includes("youtu") ? (
                  <iframe
                    width="100%"
                    height="600"
                    src={`https://www.youtube.com/embed/${video.split("youtu.be/")[1]?.split("?")[0]}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-3xl shadow-md w-full h-[300px] lg:h-[600px]"
                  ></iframe>
                ) : (
                  <video controls className="rounded-3xl shadow-md w-full h-[250px] lg:h-[600px]">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-3 w-full"></div>
        )}

      </div>
    );
  };

  const yearButtons = Object.keys(eventDetails).map((year) => (
    <button
      key={year}
      onClick={() => handleYearChange(year)}
      className={`relative text-lg lg:text-xl px-6 lg:px-8 py-2 lg:py-3 rounded-3xl w-fit  hover:bg-foreground hover:text-white transition duration-200 ${selectedYear === year ? "bg-white border-2 border-foreground text-foreground" : "bg-white  text-foreground"
        }`}
    >
      {year}
    </button>
  ));

  const eventButtons = Object.keys(eventDetails[selectedYear]).map((event) => (
    <button
      key={event}
      onClick={() => handleEventChange(event)}
      className={`relative px-6 lg:px-8 py-2 lg:py-3 rounded-3xl w-fit hover:bg-foreground hover:text-white transition duration-200 ${selectedEvent === event
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
            className="absolute lg:hidden inset-0 z-10 bg-no-repeat bg-cover flex justify-between items-end lg:justify-end"
            style={{
              backgroundSize: "25%",
              paddingRight: "0rem",
              paddingBottom: "0rem", // Reduced padding at the bottom for lamps
            }}
          >
            {/* Lamps positioned for mobile (one in each corner) */}
            <div className="flex justify-between w-full px-5 lg:hidden lg:px-0 lg:space-x-4 items-end z-10">
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
            className="absolute inset-0 z-10 bg-no-repeat bg-cover flex justify-between items-end lg:justify-end"
            style={{
              backgroundSize: "25%",
              paddingRight: "4rem",
              paddingBottom: "2.5rem", // Reduced padding at the bottom for lamps
            }}
          >

            {/* Lamps for desktop screens */}
            <div className="hidden lg:flex space-x-4 items-end z-10">
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
          <div className="relative  lg:h-[88vh] w-full flex flex-col items-center lg:items-start bg-[#611D42] text-background  lg:pt-32  opacity-96 ">
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
            <div className="relative  mb-10 mt-10 lg:mt-0 z-20 w-full">
              <div className="hidden lg:block heading-wireframe-h1 ">
                OUR LAST EVENT
              </div>

              <div className="w-full flex justify-center lg:justify-start">
                <UpcomingEventHome {...upcomingEvent} />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative h-[6vh] lg:h-[12vh] w-full">
            <div className="h-full rounded-b-full w-full bg-[#540630] z-10"></div>
          </div>
        </div>


        <div className="mt-5 lg:mt-10">
          <div className="heading-wireframe-h1 text-[#565656] ">PAST EVENTS</div>

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
              <div className="w-1/2 flex  px-4 py-2 border  border-foreground rounded-lg">
                {/* <label htmlFor="year" className="block text-lg font-bold mb-2 text-center">
                  Select Year
                </label> */}
                {/* Image beside dropdown */}
                <img
                  src="/photos/dropdown1.svg"
                  alt="Event Year"
                  className="w-1/4 p-1 my-auto h-auto rounded-lg"
                />
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="block w-full  bg-[#FAF5EA]  focus:ring-2 focus:ring-foreground focus:outline-none"
                >

                  {Object.keys(eventDetails).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event dropdown */}
              <div className="w-1/2 flex px-4 py-2 border border-foreground rounded-lg focus:ring-foreground">
                {/* <label htmlFor="event" className="block text-lg font-bold mb-2 text-center">
                  Select Event
                </label> */}
                {/* Image beside dropdown */}
                <img
                  src="/photos/dropdown2.svg"
                  alt="Event Year"
                  className="w-1/4 p-1 my-auto h-auto rounded-lg"
                />
                <select
                  id="event"
                  value={selectedEvent}
                  onChange={(e) => handleEventChange(e.target.value)}
                  className="block w-full  bg-[#FAF5EA]  focus:ring-2  focus:outline-none"
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
