import Image from "next/image";

export const enum ObjectiveCardType { Small, Medium, Large }
export default function ObjectiveCard({ heading, description, imgSrc, type }: { heading: string, description: string, imgSrc: string, type: ObjectiveCardType }) {

	if (type == ObjectiveCardType.Large) {
		return (

			<div className={"flex flex-col bg-stone-300 h-[26rem] w-[18rem] rounded-3xl py-10 px-6 justify-between"}>
				<div>
					<div className="text-center font-bold text-2xl">{heading}</div>
					<div className="text-center mt-2">{description}</div>
				</div>
				<img
					src={imgSrc}
					className="pt-5 px-4"
				/>
			</div>
		)
	}
	else if (type == ObjectiveCardType.Medium) {
		return (

			<div className={"flex flex-col bg-stone-300 h-[22rem] w-[16rem] rounded-3xl pt-10 pb-8 px-4 justify-between"}>
				<div>
					<div className="text-center font-bold text-2xl">{heading}</div>
					<div className="text-center mt-2">{description}</div>
				</div>
				<img
					src={imgSrc}
					className="px-6 pt-2"
				/>
			</div>
		)
	}
	else if (type == ObjectiveCardType.Small) {
		return (

			<div className={"flex flex-col bg-stone-300 h-[14rem] w-[11rem] rounded-2xl pt-6 pb-4 px-3 justify-between"}>
				<div>
					<div className="text-center font-bold ">{heading}</div>
					<div className="text-center text-[0.7rem] pt-1">{description}</div>
				</div>
				<img
					src={imgSrc}
					className="px-7 pb-1"
				/>
			</div>
		)
	}

}
