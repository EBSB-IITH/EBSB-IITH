export default function Page() {
	return (
		<div>
			<div className="flex flex-col">
				<div className="flex flex-col *:mx-auto text-background bg-foreground rounded-b-[4rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
					<div className="flex flex-col *:mx-auto mt-24 lg:mt-52">
						<div className="text-lg mb-2">Meet the incredible</div>
						<div className="text-[2rem] lg:text-[3.4rem] font-extrabold text-center leading-none">TEAM EBSB<br />2024-25</div>
						<div className="text-center w-[50rem] lg:w-[60rem] py-8"></div>
					</div>
					<img
						src="/watermark.svg"
						className="w-fit left-0 absolute" />
					<img
						src="/watermark.svg"
						className="w-fit right-0 absolute scale-x-[-1]" />
				</div>
			</div>
		</div>
	)
}
