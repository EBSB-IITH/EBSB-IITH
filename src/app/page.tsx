'use client'

import Carousel from "@/components/Carousel";
//import GalleryHome from "@/components/Gallery-Home";
import { ObjectivesSection } from "@/components/Objective";
import UpcomingEventHome from "@/components/Upcoming-Event-Home";
import Link from "next/link";


export default function Page() {

  return (
    <div className="flex flex-col">
      <div className="flex flex-col *:mx-auto bg-foreground text-background rounded-b-[4rem] lg:rounded-b-[8rem] h-[26rem] lg:h-[44rem] pt-[2rem] relative">
        <div className="flex flex-col *:mx-auto mt-24 lg:mt-52 overflow-clip">
          <div className="text-[2rem] z-10 lg:text-[3.4rem] font-extrabold w-[20rem] lg:w-[32rem] text-center leading-[2rem] lg:leading-[3.5rem] ">EK BHARAT SHRESTHA BHARAT</div>
          <div className="text-center z-10 w-[20rem] lg:w-[40rem] pt-8">" Sardar Patel gave us Ek Bharat, it is now the solemn duty of 125 crore Indians to collectively make Shrestha Bharat. "</div>

          <img
            src="watermark.svg"
            className="w-fit left-[2rem] pointer-events-none lg:left-[10rem] top-[2rem] lg:top-[10rem] absolute scale-[2] lg:scale-[5]" />
          <img
            src="watermark.svg"
            className="w-fit z-0 right-[3.5rem] pointer-events-none lg:right-[16rem] bottom-[6rem] lg:bottom-[14rem] absolute scale-[-2] lg:scale-[-5]" />
        </div>
        <div className="mt-16 lg:mt-48 z-10 hover:font-bold hover:cursor-pointer hover:text-lg transform duration-500 "><Link href="https://ekbharat.gov.in/">Checkout EBSB Govt Website</Link></div>
        <img
          src="flowers-hp.svg"
          className="w-[8rem] lg:w-fit z-10 pointer-events-none bottom-[-3rem] lg:bottom-[-6rem] left-0 absolute" />
        <img
          src="flowers-hp.svg"
          className="w-[8rem] lg:w-fit z-10 pointer-events-none bottom-[-3rem] lg:bottom-[-6rem] right-0 absolute scale-x-[-1]" />

      </div>

      <div className="text-lg lg:text-[1rem] text-center leading-snug lg:leading-normal px-16 lg:px-80 mt-20 mb-12 lg:mb-20">
        Ek Bharat Shreshtha Bharat (EBSB) is a cultural extravaganza that brings together the rich tapestry of India{"\'"}s diverse cultures and traditions.<br className="block lg:hidden" /><br className="block lg:hidden" />At IIT Hyderabad, we take immense pride in celebrating our unity in diversity through various events and festivals that showcase the beauty and depth of Indian culture.
      </div>


      <ObjectivesSection />

      <div className=" w-[90%] md:w-auto flex flex-col mt-14 lg:mt-28 justify-center items-center *:mx-auto">
        <div className="font-bold text-2xl lg:text-3xl">UPCOMING EVENTS</div>
        <UpcomingEventHome />

      </div>
      {/* <div className="flex flex-col mt-20 lg:mt-24">
        <div className="mx-auto font-bold text-2xl lg:text-3xl text-center mb-12">OUR GALLERY OF HAPPY MOMENTS</div>
        <GalleryHome />
      </div> */}

      <div className="flex flex-col mt-12">
        <div className="mx-auto font-bold text-2xl lg:text-3xl">PAST EVENTS</div>
        <Carousel />
      </div>
    </div >
  )
}
