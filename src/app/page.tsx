import GalleryHome from "@/components/Gallery-Home";
import ObjectiveCard, { ObjectiveCardType } from "@/components/Objective-Card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col *:mx-auto bg-stone-300 rounded-b-[100px] h-[42rem]">
        <div className="flex flex-col *:mx-auto  mt-52">
          <div className="text-[3.4rem] font-extrabold w-[40rem] text-center leading-[3.5rem] ">EK BHARAT SHRESTHA BHARAT</div>
          <div className="text-center w-[36rem] pt-8">" Sardar Patel gave us Ek Bharat, it is now the solemn duty of 125 crore Indians to collectively make Shrestha Bharat. "</div>
        </div>
        <div className="mt-48">Checkout EBSB Govt Website</div>
      </div>
      <div className="text-center px-80 mt-20">
        Ek Bharat Shreshtha Bharat (EBSB) is a cultural extravaganza that brings together the rich tapestry of India's diverse cultures and traditions. At IIT Hyderabad, we take immense pride in celebrating our unity in diversity through various events and festivals that showcase the beauty and depth of Indian culture.
      </div>

      <div className="flex flex-col *:mx-auto mt-20">
        <div className="text-center font-bold text-3xl">OUR OBJECTIVES</div>
        <div className="flex flex-row pt-16 *:self-end *:mx-4">
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

        <div className="bg-stone-300 px-6 py-2 rounded-lg mt-24">
          KNOW MORE ABOUT US
        </div>
      </div>

      <div className="flex flex-col mt-24">
        <div className="mx-auto font-bold text-3xl">OUR GALLERY OF HAPPY MOMENTS</div>
        <GalleryHome />
      </div>

    </div>
  )
}
