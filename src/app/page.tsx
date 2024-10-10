import { GrayButton } from "@/components/Button";
import GalleryHome from "@/components/Gallery-Home";
import ObjectiveCard, { ObjectiveCardType } from "@/components/Objective-Card";
import UpcomingEventHome, { EventDetails } from "@/components/Upcoming-Event-Home";
import Image from "next/image";


let dussheraEvent: EventDetails = {
  title: "DUSSHERA'24",
  description: "The celebration of victory of good over evil",
  date: "2nd Oct to 3rd Oct 2024",
  time: "6:30 - 10:00 PM",
  venue: "Near old mess lawns"
}

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col *:mx-auto bg-customGray rounded-b-[100px] h-[42rem]">
        <div className="flex flex-col *:mx-auto  mt-52">
          <div className="text-[3.4rem] font-extrabold w-[40rem] text-center leading-[3.5rem] ">EK BHARAT SHRESTHA BHARAT</div>
          <div className="text-center w-[36rem] pt-8">" Sardar Patel gave us Ek Bharat, it is now the solemn duty of 125 crore Indians to collectively make Shrestha Bharat. "</div>
        </div>
        <div className="mt-48">Checkout EBSB Govt Website</div>
      </div>
      <div className="text-center px-80 mt-20">
        Ek Bharat Shreshtha Bharat (EBSB) is a cultural extravaganza that brings together the rich tapestry of India's diverse cultures and traditions. At IIT Hyderabad, we take immense pride in celebrating our unity in diversity through various events and festivals that showcase the beauty and depth of Indian culture.
      </div>

      <div className="flex flex-col *:mx-auto mt-20 ">
        <div className="text-center font-bold text-3xl">OUR OBJECTIVES</div>
        <div className="flex flex-row pt-16 *:self-end *:mx-4 mb-24">
          <ObjectiveCard
            heading="CREATE"
            description="An Environment which promotes sharing best practices and experiences"
            imgSrc="/x-logo.svg"
            type={ObjectiveCardType.Small}
          />

          <ObjectiveCard
            heading="SHOWCASE"
            description="The Rich Heritage and Culture"
            imgSrc="/x-logo.svg"
            type={ObjectiveCardType.Medium}
          />

          <ObjectiveCard
            heading="CELEBRATE"
            description="The Unity in Diversity of our Nation"
            imgSrc="/x-logo.svg"
            type={ObjectiveCardType.Large}
          />
          <ObjectiveCard
            heading="ESTABLISH"
            description="Long-Term Engagements"
            imgSrc="/x-logo.svg"
            type={ObjectiveCardType.Medium}
          />
          <ObjectiveCard
            heading="PROMOTE"
            description="The Spirit of National integration"
            imgSrc="/x-logo.svg"
            type={ObjectiveCardType.Small}
          />

        </div>

        <GrayButton text="KNOW MORE ABOUT US" />

      </div>

      <div className="flex flex-col mt-28 *:mx-auto">
        <div className="font-bold text-3xl">UPCOMING EVENTS</div>
        <UpcomingEventHome {...dussheraEvent} />

      </div>

      <div className="flex flex-col mt-24">
        <div className="mx-auto font-bold text-3xl">OUR GALLERY OF HAPPY MOMENTS</div>
        <GalleryHome />
      </div>

    </div>
  )
}
