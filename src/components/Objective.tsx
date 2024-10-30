'use client';

import Link from "next/link";
import { GrayButton } from "./Button";
import { usePathname } from "next/navigation";

export const enum ObjectiveCardType { Small, Medium, Large }
export default function ObjectiveCard({ heading, description, imgSrc, type, style }: { heading: string, description: string, imgSrc: string, type: ObjectiveCardType, style: string }) {

	if (type == ObjectiveCardType.Large) {
		return (

			<div className={"relative flex flex-col bg-foreground h-[11rem] lg:h-[26rem] w-[7.5rem] lg:w-[18rem] overflow-clip rounded-xl lg:rounded-3xl pt-4 lg:pt-10 pb-2 lg:pb-3 justify-between text-background " + style}>
				<div className="px-1 lg:px-4 z-20">
					<div className="text-center font-bold lg:text-2xl">{heading}</div>
					<div className="hidden lg:block text-center mt-2">{description}</div>
				</div>
				<div className="relative">
					<img
						src="watermark.svg"
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

			<div className={"flex flex-col bg-foreground h-[9rem] lg:h-[22rem] w-[6.5rem] lg:w-[15rem] rounded-xl lg:rounded-3xl pt-4 lg:pt-10 pb-2 lg:pb-3 overflow-clip justify-between text-background " + style}>
				<div className="px-1 lg:px-4 z-20">
					<div className="text-center font-bold lg:text-2xl">{heading}</div>
					<div className="hidden lg:block text-center mt-2">{description}</div>
				</div>
				<div className="relative">
					<img
						src="watermark.svg"
						className="absolute bottom-16 right-64 z-[0] scale-[2.5]"
					/>
					<img
						src="watermark.svg"
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

			<div className={"flex flex-col bg-foreground h-[9rem] lg:h-[14rem] w-[6.5rem] lg:w-[11rem] overflow-clip rounded-xl lg:rounded-2xl pt-4 lg:pt-6 pb-2 lg:pb-3 justify-between text-background " + style}>
				<div className="px-2 z-20">
					<div className="text-center font-bold ">{heading}</div>
					<div className="hidden lg:block text-center text-[0.7rem] pt-1">{description}</div>
				</div>
				<div className="relative">
					<img
						src="watermark.svg"
						className="absolute bottom-12 right-0 z-0 scale-[1.5]"
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


export function ObjectivesSection() {
	return (
		<div className="flex flex-col *:mx-auto ">
			<div className="text-center font-bold text-3xl">OUR OBJECTIVES</div>
			<div className="flex flex-row justify-center flex-wrap pt-12 lg:pt-16 *:self-end *:mx-1 lg:*:mx-2 mb-6 lg:mb-24">
				<ObjectiveCard
					heading="CREATE"
					description="An Environment which promotes sharing best practices and experiences"
					imgSrc="objectives/create.png"
					type={ObjectiveCardType.Small}
					style="hidden lg:flex"
				/>

				<ObjectiveCard
					heading="SHOWCASE"
					description="The Rich Heritage and Culture"
					imgSrc="objectives/showcase.png"
					type={ObjectiveCardType.Medium}
					style=""
				/>

				<ObjectiveCard
					heading="CELEBRATE"
					description="The Unity in Diversity of our Nation"
					imgSrc="objectives/celebrate.png"
					type={ObjectiveCardType.Large}
					style=""
				/>
				<ObjectiveCard
					heading="ESTABLISH"
					description="Long-Term Engagements"
					imgSrc="objectives/establish.png"
					type={ObjectiveCardType.Medium}
					style=""
				/>
				<ObjectiveCard
					heading="PROMOTE"
					description="The Spirit of National integration"
					imgSrc="objectives/promote.png"
					type={ObjectiveCardType.Small}
					style="hidden lg:flex"
				/>
			</div>
			<div className="flex flex-row lg:hidden justify-center mb-8">
				<ObjectiveCard
					heading="CREATE"
					description="An Environment which promotes sharing best practices and experiences"
					imgSrc="objectives/create.png"
					type={ObjectiveCardType.Small}
					style="mr-2"
				/>
				<ObjectiveCard
					heading="PROMOTE"
					description="The Spirit of National integration"
					imgSrc="objectives/promote.png"
					type={ObjectiveCardType.Small}
					style=""
				/>
			</div>

			<Link href="/about">
				<div data-tonotshow={(usePathname() == "/about").valueOf()} className="data-[tonotshow=true]:hidden"><GrayButton text="KNOW MORE ABOUT US" /></div>
			</Link>

		</div>
	)
}
