import { WhiteButton } from "../Button";
import { outerDivStyle, headingStyle, yearStyle, subheadingStyle, descriptionStyle } from "./style-data";

export function Holi23() {
	return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>HOLI'23</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2023</div>
			<div className={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat<br />rutrum ornare. Curabitur pellentesque venenatis sem, quis rhoncus risus porta sit amet.<br />Pellentesque tempor leo est, in venenatis felis fermentum id. Vestibulum in odio nulla.<br />Fusce vel felis vitae nisl.</div>
			<WhiteButton text="Explore More" />

			<img src="/holi/23/colours.png" className="absolute right-6  bottom-8 z-10" />
			<img src="/holi/23/colours.png" className="absolute left-6 bottom-8 scale-x-[-1] z-10" />
			<img src="/watermark.svg" className="absolute left-[4rem] scale-[4] top-24 z-0" />
			<img src="/watermark.svg" className="absolute right-[5rem] scale-[4] bottom-[10rem] " />
		</div >
	)
}
