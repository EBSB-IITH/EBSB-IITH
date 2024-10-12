import Image from "next/image";
import UpcomingEventHome, { EventDetails } from "@/components/Upcoming-Event-Home";

let dussheraEvent: EventDetails = {
  title: "DUSSHERA'24",
  description: "The celebration of victory of good over evil",
  date: "2nd Oct to 3rd Oct 2024",
  time: "6:30 - 10:00 PM",
  venue: "Near old mess lawns"
};

export default function EventsPage() {
  return (
    <main className="min-h-screen flex flex-col items-start">
      <div className="w-full">
      <div className="flex flex-col bg-customGray rounded-b-[100px] min-h-[42rem]">
        <div className="flex flex-col ml-5 mt-20">
          <div className="flex flex-col ">
            <div className="font-bold text-center text-3xl">UPCOMING EVENTS</div>
            <UpcomingEventHome {...dussheraEvent} />
          </div>
        </div>
      </div>
      </div>

    </main>
  );
}
