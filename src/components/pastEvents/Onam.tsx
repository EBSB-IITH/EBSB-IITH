import { WhiteButton } from "../Button";
import { buttonStyle, descriptionStyle, headingStyle, outerDivStyle, subheadingStyle, yearStyle } from "./style-data";

export function Onam24() {
	return (
		<div className={outerDivStyle} >
			<div className={headingStyle}>ONAM'24</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2024</div>
			<div className={descriptionStyle}>Onam, the splendid harvest festival of Kerala, is a vibrant celebration <br className="hidden lg:block" />that unites the state with an aura of enthusiasm and joy. <br className="block lg:hidden" /><br className="block lg:hidden" />This cherished<br className="hidden lg:block" /> tradition symbolizes the rich cultural heritage and communal harmony<br className="hidden lg:block" /> of Kerala.</div>
			<div className={buttonStyle}>
				<WhiteButton text="Explore More" />
			</div>
			<img src="/onam/24/tree.svg" className="absolute z-10 left-6 scale-[1.8] lg:scale-[3.2] bottom-[3.6rem] lg:bottom-[9rem]" />
			<img src="/onam/24/tree.svg" className="absolute z-10 right-6 scale-[1.8] lg:scale-[3.2] scale-x-[-1.8] lg:scale-x-[-3.2] bottom-[3.6rem] lg:bottom-[9rem]" />
			<img src="/onam/24/bowl.svg" className="absolute left-10 lg:scale-[1.6] bottom-2 lg:bottom-6 z-10" />
			<img src="/watermark.svg" className="absolute left-8 scale-[5] top-[-3rem] z-0" />
			<img src="/watermark.svg" className="absolute right-40 scale-[4] bottom-[-2rem] z-0" />
		</div >
	)
}
