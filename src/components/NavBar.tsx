import Link from "next/link"

export default function NavBar() {
	return (
		<div className={'flex lg:bg-white flex-row lg:py-5 lg:px-12 lg:rounded-[40px] lg:*:px-12 lg:text-lg'}>
			<img src="/menu.svg" className="block lg:hidden" />
			<Link href="/about">
				<div className="hidden lg:block">About Us</div>
			</Link>

			<Link href="/events">
				<div className="hidden lg:block">Events</div>
			</Link>

			<Link href="/yuva-sangam">
				<div className="hidden lg:block">Yuva Sangam</div>
			</Link>

			<Link href="/team">
				<div className="hidden lg:block">Team</div>
			</Link>

			<Link href="/gallery">
				<div className="hidden lg:block">Gallery</div>
			</Link>

		</div>
	)
}
