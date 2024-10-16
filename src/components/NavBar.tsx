export default function NavBar() {
	return (
		<div className={'flex lg:bg-white flex-row lg:py-5 lg:px-12 lg:rounded-[40px] lg:*:px-12 lg:text-lg'}>
			<img src="/menu.svg" className="block lg:hidden" />
			<div className="hidden lg:block">About Us</div>
			<div className="hidden lg:block">Events</div>
			<div className="hidden lg:block">Yuva Sangam</div>
			<div className="hidden lg:block">Team</div>
			<div className="hidden lg:block">Gallery</div>
		</div>
	)
}
