export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col *:mx-auto overflow-clip text-background bg-foreground rounded-b-[4rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
				<div className="flex flex-col *:mx-auto mt-24 mb-20 lg:mb-48 z-10 lg:mt-52">
					<div className="z-10 text-[1.8rem] lg:text-[3.4rem] w-[20rem] lg:w-[40rem] font-extrabold text-center leading-tight">GALLERY OF YOUR BEAUTIFUL MEMORIES</div>
					<div className="text-center text-[0.9rem] lg:text-[1rem] w-[16rem] lg:w-[38rem] py-8 z-10">“ Sardar patel gave us Ek Bharat, it is now the solen duty of 125 crore Indians to collectively make Shreshtha Bharat”</div>
					<img src="gallery-head-bg.png" className="absolute pointer-events-none z-1 scale-y-[0.7] lg:scale-y-100 h-full top-0 left-0 px-4 lg:px-24" />
				</div>
			</div>
		</div>

	)
}