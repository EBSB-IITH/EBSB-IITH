'use client'
import { GrayButton } from "@/components/Button";
import Carousel from "@/components/Carousel";
import GalleryHome from "@/components/Gallery-Home";
import { ObjectivesSection } from "@/components/Objective";
import UpcomingEventHome from "@/components/Upcoming-Event-Home";
import { ReactNode, Ref, useEffect, useRef } from "react";


export default function Page() {

  const pageHeadRef: Ref<HTMLDivElement> = useRef(null)
  let radialGradientStyle = "";
  useEffect(() => {
    if (window.innerWidth < 720) {
      pageHeadRef.current!.style.background = "radial-gradient(ellipse at center, #7F355D 0%,  #611D42 60% )"
    }
    else {
      pageHeadRef.current!.style.background = "radial-gradient(#7F355D 0%,  #611D42 80%)"
    }
  }, [])


  return (
    <div className="flex flex-col overflow-cli">
      <div ref={pageHeadRef} className="flex flex-col *:mx-auto text-background rounded-b-[4rem] lg:rounded-b-[8rem] h-[26rem] lg:h-[42rem] relative" style={{ background: radialGradientStyle }}>
        <div className="flex flex-col *:mx-auto mt-24 lg:mt-52">
          <div className="text-[2rem] lg:text-[3.4rem] font-extrabold w-[20rem] lg:w-[36rem] text-center leading-[2rem] lg:leading-[3.5rem] ">EK BHARAT SHRESTHA BHARAT</div>
          <div className="text-center w-[20rem] lg:w-[44rem] pt-8">" Sardar Patel gave us Ek Bharat, it is now the solemn duty of 125 crore Indians to collectively make Shrestha Bharat. "</div>
        </div>
        <div className="mt-24 lg:mt-48">Checkout EBSB Govt Website</div>
        <img
          src="/flowers-hp.svg"
          className="w-[8rem] lg:w-fit bottom-[-3rem] lg:bottom-[-6rem] left-0 absolute" />
        <img
          src="/flowers-hp.svg"
          className="w-[8rem] lg:w-fit bottom-[-3rem] lg:bottom-[-6rem] right-0 absolute scale-x-[-1]" />
      </div>

      <div className="text-lg lg:text-[1rem] text-center px-16 lg:px-80 mt-20">
        Ek Bharat Shreshtha Bharat (EBSB) is a cultural extravaganza that brings together the rich tapestry of India's diverse cultures and traditions.<br className="block lg:hidden" /><br className="block lg:hidden" />At IIT Hyderabad, we take immense pride in celebrating our unity in diversity through various events and festivals that showcase the beauty and depth of Indian culture.
      </div>


      <ObjectivesSection />

      <div className="flex flex-col mt-20 lg:mt-28 justify-center *:mx-auto">
        <div className="font-bold text-3xl">UPCOMING EVENTS</div>
        <UpcomingEventHome />

      </div>
      <div className="flex flex-col mt-20 lg:mt-24">
        <div className="mx-auto font-bold text-3xl text-center">OUR GALLERY OF HAPPY MOMENTS</div>
        <GalleryHome />
      </div>

      <div className="flex flex-col mt-12">
        <div className="mx-auto font-bold text-3xl">PAST EVENTS</div>
        <Carousel />
      </div>
    </div >
  )
}
