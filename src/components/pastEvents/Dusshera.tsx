import Link from "next/link";
import { WhiteButton } from "../Button"; import { outerDivStyle, headingStyle, yearStyle, subheadingStyle, descriptionStyle, buttonStyle } from "./style-data";

export function Dusshera23() {
	return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>DIWALI'24</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2024</div>
			<div className={descriptionStyle}>Diwali is a significant festival celebrated with immense joy and fervour <br className="hidden lg:block" />throughout India. <br className="block ld:hidden" /><br className="block ld:hidden" />This grand festival not only holds religious significance but <br className="hidden lg:block" />also symbolizes the victory of righteousness, truth and justice in our lives.</div>
			<Link href="/events">
				<div className={buttonStyle}>
					<WhiteButton text="Explore More" />
				</div>
			</Link>
			<img src="dusshera/24/diya.svg" className="absolute right-[-3rem] scale-[0.5] lg:scale-[0.85] bottom-[4rem] lg:bottom-1 z-10" />
			<img src="dusshera/24/diya.svg" className="absolute left-[-3rem] bottom-[4rem] lg:bottom-1 scale-[0.5] lg:scale-[0.85] z-10" />
			<img src="watermark.svg" className="absolute left-10 scale-[5] bottom-24 z-0" />
			<img src="watermark.svg" className="absolute right-10 scale-[3] top-12 " />
		</div >
	)
}
