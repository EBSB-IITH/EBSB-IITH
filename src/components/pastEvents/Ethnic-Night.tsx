import Link from "next/link";
import { WhiteButton } from "../Button";
import { outerDivStyle, headingStyle, yearStyle, subheadingStyle, descriptionStyle, buttonStyle } from "./style-data";

export function EthnicNight23() {
	return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>ETHNIC NIGHT'23</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2023</div>
			<div className={descriptionStyle}>An enchanting evening of music, dance, and art,Ethnic Night<br /> brought the diverse beauty of our nation to life.</div>

			<Link href="/events">
				<div className={buttonStyle}>
					<WhiteButton text="Explore More" />
				</div>
			</Link>

			<img src="ethnicNight/23/man.svg" className="absolute right-0 lg:right-[2rem] scale-[1.2] lg:scale-[2.3] bottom-[2rem] lg:bottom-[8rem] z-10" />
			<img src="ethnicNight/23/woman.svg" className="absolute left-8 lg:left-[4rem] bottom-[2rem] lg:bottom-[8rem] scale-[1.2] lg:scale-[2.3] z-10" />
			<img src="watermark.svg" className="absolute left-[14rem] scale-[3] bottom-24 z-0" />
			<img src="watermark.svg" className="absolute right-10 scale-[5] top-8 " />
		</div >
	)
}
