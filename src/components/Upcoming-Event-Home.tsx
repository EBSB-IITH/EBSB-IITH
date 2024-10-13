import { WhiteButton } from "./Button"


let upcomingEvent = {
	title: "DUSSHERA'24",
	description: "The celebration of victory of good over evil",
	date: "2nd Oct to 3rd Oct 2024",
	time: "6:30 - 10:00 PM",
	venue: "Near old mess lawns"
}
export default function UpcomingEventHome() {
	return (
		<div className="relative flex flex-row bg-foreground text-background overflow-clip mx-24 mt-16 rounded-3xl px-16 py-12 w-4/6">
			<div className="flex flex-col pr-12">
				<div className="mb-40">
					<div className="text-[3rem] font-bold">{upcomingEvent.title}</div>
					<div className="mb-12">{upcomingEvent.description}</div>
					<div className="text-sm">Date - {upcomingEvent.date}</div>
					<div className="text-sm">Time - {upcomingEvent.time}</div>
					<div className="text-sm">Venue - {upcomingEvent.venue}</div>
				</div>
				<div className="flex flex-row justify-between pr-8 ">
					<WhiteButton text="Know More" />
					<WhiteButton text="Register Now" />
				</div>
			</div>
			<img src="/dusshera/24/diya.svg" className="absolute bottom-12 right-0 scale-125 z-10" />
			<img src="/dusshera/24/diya.svg" className="absolute bottom-0 right-[16rem] scale-75 z-10" />
			<img src="/watermark.svg" className="absolute top-0 right-32 scale-[4.5] rotate-12 z-1" />
		</div>
	)
}
