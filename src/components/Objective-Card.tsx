export const enum ObjectiveCardType { Small, Medium, Large }
export default function ObjectiveCard({ heading, description, imgSrc, type }: { heading: string, description: string, imgSrc: string, type: ObjectiveCardType }) {

	if (type == ObjectiveCardType.Large) {
		return (

			<div className={"flex flex-col bg-foreground h-[26rem] w-[18rem] overflow-clip rounded-3xl pt-10 pb-3 justify-between text-background"}>
				<div className="px-4 z-20">
					<div className="text-center font-bold text-2xl">{heading}</div>
					<div className="text-center mt-2">{description}</div>
				</div>
				<div className="relative">
					<img
						src="/watermark.svg"
						className="absolute bottom-32 z-[0] scale-[3.5]"
					/>
					<img
						src={imgSrc}
						className="absolute bottom-0"
					/>
				</div>
			</div>
		)
	}
	else if (type == ObjectiveCardType.Medium) {
		return (

			<div className={"flex flex-col bg-foreground h-[22rem] w-[15rem] rounded-3xl pt-10 pb-3 overflow-clip justify-between text-background"}>
				<div className="px-4 z-20">
					<div className="text-center font-bold text-2xl">{heading}</div>
					<div className="text-center mt-2">{description}</div>
				</div>
				<div className="relative">
					<img
						src="/watermark.svg"
						className="absolute bottom-16 right-64 z-[0] scale-[2.5]"
					/>
					<img
						src="/watermark.svg"
						className="absolute bottom-40 left-48 z-[0] scale-[2]"
					/>
					<img
						src={imgSrc}
						className="absolute bottom-0 w-full"
					/>
				</div>
			</div>
		)
	}
	else if (type == ObjectiveCardType.Small) {
		return (

			<div className={"flex flex-col bg-foreground h-[14rem] w-[11rem] overflow-clip rounded-2xl pt-6 pb-3 justify-between text-background"}>
				<div className="px-2 z-20">
					<div className="text-center font-bold ">{heading}</div>
					<div className="text-center text-[0.7rem] pt-1">{description}</div>
				</div>
				<div className="relative">
					<img
						src="/watermark.svg"
						className="absolute bottom-12 right-0 z-[0] scale-[1.5]"
					/>
					<img
						src={imgSrc}
						className="absolute bottom-0 w-full"
					/>
				</div>
			</div>
		)
	}

}
