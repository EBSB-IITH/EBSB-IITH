import Link from "next/link";
import { WhiteButton } from "../../components/Button"

export interface EventDetails {
  title: string,
  description: string,
  date: string,
  time: string,
  venue: string
}

export default function UpcomingEventHome({ title, description, date, venue }: EventDetails) {
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-40 mt-4 sm:mt-6 md:mt-8 lg:mt-10 py-4 sm:py-6 md:py-8">
      <div className="flex flex-col max-w-xl ">
        {/* Title section with improved responsive typography */}
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-10 leading-tight">
            {title}
          </h1>

          {/* Description with better readability on mobile */}
          <p className="normal-text text-base sm:text-lg  md:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            {description}
          </p>

          {/* Event details with improved spacing */}
          <div className="space-y-2 sm:space-y-3">
            <p className="normal-text text-sm sm:text-base md:text-lg">
              Date - {date}
            </p>
            {/* <p className="normal-text text-sm sm:text-base md:text-lg">
				Time - {time}
			  </p> */}
            <p className="normal-text text-sm  sm:text-base md:text-lg">
              Venue - {venue}
            </p>
          </div>
        </div>

        {/* Button container with improved mobile layout */}
        <div className="sm:gap-4  mt-4 sm:mt-6">
          <Link href="/events">
            <WhiteButton text="VIEW SCHEDULE" />
          </Link>
        </div>
      </div>
    </div>
  );
}
