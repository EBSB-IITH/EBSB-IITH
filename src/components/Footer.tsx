import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex flex-col px-6 lg:px-32 mt-20 mb-24">
			<div className="font-bold text-3xl text-center lg:text-start">QUICK LINKS</div>
			<div className="flex flex-col lg:flex-row mt-8 lg:mt-10 mb-10 lg:mb-16 text-lg *:mt-2 lg:*:mt-0 text-center lg:text-start justify-between">
				<Link href="/"><div>Home</div></Link>
				<Link href="/about"><div>About Us</div></Link>
				<Link href="/events"><div>Upcoming Events</div></Link>
				<Link href="/yuva-sangam"><div>Yuva Sangam</div></Link>
				<Link href="/team"><div>Team</div></Link>
				<Link href="https://ekbharat.gov.in"><div>EBSB Official</div></Link>
				<Link href="https://iith.ac.in"><div>IITH</div></Link>
			</div>
			<hr className="h-px w-full bg-foreground" />
			<div className="flex flex-col lg:flex-row mt-8 lg:mt-14 ">
				<Contact style="block lg:hidden" />

				<div className="flex flex-col lg:mr-96">
					<div className="flex flex-col lg:flex-row">
						<img
							src="ebsb-logo.png"
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
						<Link href="https://www.instagram.com/ebsb_club_iith/">
							<img
								src="ig-logo.svg"
								alt="Logo"
								width={40}
								height={40}
							/>
						</Link>
						<Link href="https://www.youtube.com/@EchoIITH">
							<img
								src="youtube-logo.svg"
								alt="Logo"
								width={60}
								height={60}
							/>
						</Link>
						<Link href="https://www.facebook.com/profile.php?id=100070286642769">
							<img
								src="fb-logo.svg"
								alt="Logo"
								width={40}
								height={40}
							/>
						</Link>
						<Link href="https://x.com/clubebsb">
							<img
								src="x-logo.svg"
								alt="Logo"
								width={40}
								height={40}
							/>
						</Link>
					</div >
				</div >

				<Contact style="hidden lg:block" />
			</div >
		</div >
	)
}

function Contact({ style }: { style: string }) {
	return (
		<div className={"flex flex-col mb-8 *:mt-3 " + style}>
			<div className="text-2xl font-bold text-center lg:text-start">CONTACT US</div>
			<div className="text-center lg:text-start">Email - <a href="mailto:ebsbclub@campus.iith.ac.in">ebsbclub@campus.iith.ac.in</a> </div>
			<div className="text-center lg:text-start">Contact - <a href="tel:+91 9910337161">+91 9910337161</a> </div>
			<div className="text-center lg:text-start">Location - Indian Institute of Technology Hyderabad<br />IITH Road, Near NH-65 Sangareddy, Kandi, Telangana - 502285</div>
		</div>
	)
}
