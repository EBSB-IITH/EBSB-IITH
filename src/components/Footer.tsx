import Image from "next/image";

export default function Page() {
	return (
		<div className="flex flex-col px-32 mt-16 mb-24 text-gray-700">
			<div className="font-bold text-3xl">QUICK LINKS</div>
			<div className="flex flex-row mt-10 mb-16 text-lg justify-between">
				<div>Home</div>
				<div>About Us</div>
				<div>Upcoming Events</div>
				<div>Yuva Sangam</div>
				<div>Team</div>
				<div>EBSB Offical</div>
				<div>IITH</div>
			</div>
			<hr className="h-px w-full bg-black" />
			<div className="flex flex-row mt-14 ">
				<div className="flex flex-col mr-96">
					<div className="flex flex-row">
						<Image
							src="/ebsb-logo.png"
							alt="EBSB Logo"
							width={100}
							height={100}
							className="mr-4"
						/>
						<div className="flex flex-col self-center">
							<div className="font-bold text-2xl leading-6">EK BHARAT<br />SHRESTHA BHARAT</div>
							<div className="mt-2">IIT HYDERABAD</div>
						</div>
					</div>
					<div className="flex flex-row mt-8 *:mr-6">
						<Image
							src="/ig-logo.svg"
							alt="Logo"
							width={40}
							height={40}
						/>
						<Image
							src="/youtube-logo.svg"
							alt="Logo"
							width={40}
							height={40}
						/>
						<Image
							src="/fb-logo.svg"
							alt="Logo"
							width={40}
							height={40}
						/>
						<Image
							src="/x-logo.svg"
							alt="Logo"
							width={40}
							height={40}
						/>
					</div>
				</div>
				<div className="flex flex-col mb-8 *:mt-3">
					<div className="text-2xl font-bold ">CONTACT US</div>
					<div>Email - ebsbclub@campus.iith.ac.in</div>
					<div>Contact - +91 9182734726</div>
					<div>Location - Indian Institute of Technology Hyderabad<br />IITH Road, Near NH-65 Sangareddy, Kandi, Telangana - 502285</div>
				</div>
			</div>
		</div>
	)
}
