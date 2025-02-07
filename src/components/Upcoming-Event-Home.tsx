import Link from "next/link"
import { WhiteButton } from "./Button"


const upcomingEvent = {
	title: "KHUSHIYON WALI DIWALI '24",
	description: "Diwali Celebrations and Garba Night at IITH",
	date: "30 Oct to 1 Nov 2024",
	time: "6:30 PM Onwards",
	venue: "Near old mess lawns"
}
export default function UpcomingEventHome() {
	return (
		<div className="relative flex flex-col lg:flex-row bg-foreground text-background overflow-clip lg:mx-24 mt-16 rounded-xl lg:rounded-3xl px-2 lg:px-16 pt-12 pb-12 max-w-5/6 min-w-5/6 lg:w-4/6 *:text-center lg:*:text-start self-center mx-auto">
			<div className="flex flex-col lg:pr-12">
				<div className="mb-24 lg:mb-40">
					<div className="relative text-[2rem] lg:text-[3rem] font-bold z-10">{upcomingEvent.title}</div>
					<div className="relative mb-8 lg:text-lg lg:mb-12 z-10">{upcomingEvent.description}</div>
					<div className="relative text-sm lg:text-lg z-10">Date - {upcomingEvent.date}</div>
					<div className="relative text-sm lg:text-lg z-10">Time - {upcomingEvent.time}</div>
					<div className="relative text-sm lg:text-lg z-10">Venue - {upcomingEvent.venue}</div>
				</div>
				<div className="flex flex-row justify-center md:justify-start *:mx-4 lg:*:mr-4 lg:pr-8 ">
					<Link href="/events">
						<WhiteButton text="KNOW MORE" />
					</Link>
					{/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLScXwgwEokPOiXiI1J9l8-8PyVzfB7akBXCWN8tk7SzAWx99MQ/viewform" >
						<WhiteButton text="REGISTER NOW"  />
					</Link> */}
				</div>
			</div>
			<div className="flex flex-row lg:block mt-6 lg:mt-0 justify-center *:self-end lg:*:self-start">
				<img src="dusshera/24/diya.svg" className="relative lg:absolute w-[4rem] lg:w-fit lg:bottom-12 translate-x-[1rem] lg:translate-x-0 lg:right-0 lg:scale-125 z-10" />
				<img src="dusshera/24/diya.svg" className="relative lg:absolute order-3 lg:order-2 w-[4rem] lg:w-fit block lg:hidden translate-x-[-1rem] lg:translate-x-0 lg:bottom-12 lg:right-0 lg:scale-125 z-10" />
				<img src="dusshera/24/diya.svg" className="relative lg:absolute order-2 lg:order-3 w-[6rem] lg:w-fit lg:bottom-0 lg:right-[16rem] lg:scale-75 z-[12]" />
				<img src="watermark.svg" className="absolute top-0 right-32 lg:scale-[4.5] rotate-12 z-1" />
			</div>
		</div >
	)
}
