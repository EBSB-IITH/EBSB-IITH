import { WhiteButton } from "../Button";
import { descriptionStyle, headingStyle, outerDivStyle, subheadingStyle, yearStyle } from "./style-data";

export function Onam24() {
	return (
		<div className={outerDivStyle} >
			<div className={headingStyle}>ONAM'24</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2024</div>
			<div className={descriptionStyle}>Onam, the splendid harvest festival of Kerala, is a vibrant celebration<br />that unites the state with an aura of enthusiasm and joy. This cherished<br />tradition symbolizes the rich cultural heritage and communal harmony<br />of Kerala.</div>
			<WhiteButton text="Explore More" />

			<img src="/onam/24/tree.svg" className="absolute z-10 left-6 scale-[3.2] bottom-[9rem]" />
			<img src="/onam/24/tree.svg" className="absolute z-10 right-6 scale-[3.2] scale-x-[-3.2] bottom-[9rem]" />
			<img src="/onam/24/bowl.svg" className="absolute left-10 scale-[1.6] bottom-6 z-10" />
			<img src="/watermark.svg" className="absolute left-8 scale-[5] top-[-3rem] z-0" />
			<img src="/watermark.svg" className="absolute right-40 scale-[4] bottom-[-2rem] z-0" />
		</div >
	)
}
