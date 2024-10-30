import Link from "next/link";
import { WhiteButton } from "../Button";
import { outerDivStyle, headingStyle, yearStyle, subheadingStyle, descriptionStyle, buttonStyle } from "./style-data";

export function Holi23() {
	return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>HOLI'23</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2023</div>
			<div className={descriptionStyle}>Holi, the festival of colors, truly unites diverse cultures across India. Celebrated with colors and joyous festivities, it fosters harmony and brotherhood</div>
			<Link href="/events">
				<div className={buttonStyle}>
					<WhiteButton text="Explore More" />
				</div>
			</Link>

			<img src="holi/23/colours.png" className="absolute right-[-0.8rem] lg:right-6 scale-75 lg:scale-100 bottom-10 lg:bottom-8 z-10" />
			<img src="holi/23/colours.png" className="absolute left-[-0.8rem] lg:left-6 bottom-10 lg:bottom-8 scale-75 lg:scale-100 scale-x-[-0.75] lg:scale-x-[-1] z-10" />
			<img src="watermark.svg" className="absolute left-[4rem] scale-[4] top-24 z-0" />
			<img src="watermark.svg" className="absolute right-[5rem] scale-[4] bottom-[10rem] " />
		</div >
	)
}
