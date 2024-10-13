import { WhiteButton } from "../Button";

export function Onam24({ style }: { style: string }) {
	return (
		<div className={"relative bg-foreground text-background w-[64rem] rounded-3xl *:mx-auto overflow-clip *:w-fit *:text-center px-32 pt-20 pb-16 " + style} >
			<div className={"text-[3rem] font-bold "}>ONAM'24</div>
			<div className="pt-4 text-lg">Celebrations</div>
			<div className="text-lg">2024</div>
			<div className="pt-10 pb-8 px-16 text-nowrap">Onam, the splendid harvest festival of Kerala, is a vibrant celebration<br />that unites the state with an aura of enthusiasm and joy. This cherished<br />tradition symbolizes the rich cultural heritage and communal harmony<br />of Kerala.</div>
			<WhiteButton text="Explore More" />

			<img src="/onam/24/tree.svg" className="absolute left-6 scale-[3.2] bottom-[9rem]" />
			<img src="/onam/24/tree.svg" className="absolute right-6 scale-[3.2] scale-x-[-3.2] bottom-[9rem]" />
			<img src="/onam/24/bowl.svg" className="absolute left-10 scale-[1.6] bottom-6" />
		</div >
	)
}
