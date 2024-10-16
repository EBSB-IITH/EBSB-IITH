import { WhiteButton } from "../Button";
import { outerDivStyle, headingStyle, yearStyle, subheadingStyle, descriptionStyle, buttonStyle } from "./style-data";

export function EthnicNight23() {
	return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>ETHNIC NIGHT'23</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2023</div>
			<div className={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat<br />rutrum ornare. Curabitur pellentesque venenatis sem, quis rhoncus risus porta sit amet.<br />Pellentesque tempor leo est, in venenatis felis fermentum id. Vestibulum in odio nulla.<br />Fusce vel felis vitae nisl.</div>
			<div className={buttonStyle}>
				<WhiteButton text="Explore More" />
			</div>

			<img src="/ethnicNight/23/man.svg" className="absolute right-0 lg:right-[2rem] scale-[1.2] lg:scale-[2.3] bottom-[2rem] lg:bottom-[8rem] z-10" />
			<img src="/ethnicNight/23/woman.svg" className="absolute left-8 lg:left-[4rem] bottom-[2rem] lg:bottom-[8rem] scale-[1.2] lg:scale-[2.3] z-10" />
			<img src="/watermark.svg" className="absolute left-[14rem] scale-[3] bottom-24 z-0" />
			<img src="/watermark.svg" className="absolute right-10 scale-[5] top-8 " />
		</div >
	)
}
