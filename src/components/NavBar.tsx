import Link from "next/link";

export default function NavBar() {
	return (
		<div className={'flex bg-white flex-row shadow-md shadow-gray-400 py-5 px-12 rounded-[40px] *:px-12 text-lg'}>
			<div>About Us</div>
			<Link href="/events">Events</Link>
			<div>Yuva Sangam</div>
			<div>Team</div>
			<div>Gallery</div>
		</div>
	)
}
