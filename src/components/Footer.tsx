import Image from "next/image";

export default function Footer() {
	return (
		<div className="flex flex-col px-6 lg:px-32 mt-20 mb-24">
			<div className="font-bold text-3xl text-center lg:text-start">QUICK LINKS</div>
			<div className="flex flex-col lg:flex-row mt-8 lg:mt-10 mb-10 lg:mb-16 text-lg *:mt-2 lg:*:mt-0 text-center lg:text-start justify-between">
				<div>Home</div>
				<div>About Us</div>
				<div>Upcoming Events</div>
				<div>Yuva Sangam</div>
				<div>Team</div>
				<div>EBSB Offical</div>
				<div>IITH</div>
			</div>
			<hr className="h-px w-full bg-foreground" />
			<div className="flex flex-col lg:flex-row mt-8 lg:mt-14 ">
				<Contact style="block lg:hidden" />

				<div className="flex flex-col lg:mr-96">
					<div className="flex flex-col lg:flex-row">
						<Image
							src="/ebsb-logo.png"
							alt="EBSB Logo"
							width={100}
							height={100}
							className="lg:mr-4 mb-6 lg:mb-0 self-center lg:self-auto"
						/>
						<div className="flex flex-col self-center">
							<div className="font-bold text-2xl leading-6 text-center lg:text-start">EK BHARAT<br />SHRESTHA BHARAT</div>
							<div className="mt-2 text-center lg:text-start">IIT HYDERABAD</div>
						</div>
					</div>
					<div className="flex flex-row mt-4 lg:mt-8 *:mr-6 mx-auto lg:mx-0">
						<img
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

				<Contact style="hidden lg:block" />
			</div>
		</div>
	)
}

function Contact({ style }: { style: string }) {
	return (
		<div className={"flex flex-col mb-8 *:mt-3 " + style}>
			<div className="text-2xl font-bold text-center lg:text-start">CONTACT US</div>
			<div className="text-center lg:text-start">Email - ebsbclub@campus.iith.ac.in</div>
			<div className="text-center lg:text-start">Contact - +91 9182734726</div>
			<div className="text-center lg:text-start">Location - Indian Institute of Technology Hyderabad<br />IITH Road, Near NH-65 Sangareddy, Kandi, Telangana - 502285</div>
		</div>
	)
}
