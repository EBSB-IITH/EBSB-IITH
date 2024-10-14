import { WhiteButton } from "../Button";
import { outerDivStyle, headingStyle, yearStyle, subheadingStyle, descriptionStyle } from "./style-data";

export function Dusshera23() {
	return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>DUSSHERA'24</div>
			<div className={subheadingStyle}>Celebrations</div>
			<div className={yearStyle}>2023</div>
			<div className={descriptionStyle}>Dusshera is a significant Hindu festival celebrated with immense joy and fervour<br />throughout India. This grand festival not only holds religious significance but<br />also symbolizes the victory of righteousness, truth and justice in out lives.</div>
			<WhiteButton text="Explore More" />

			<img src="/dusshera/24/diya.svg" className="absolute right-[-3rem] scale-[0.85] bottom-1 z-10" />
			<img src="/dusshera/24/diya.svg" className="absolute left-[-3rem] bottom-1 scale-[0.85] z-10" />
			<img src="/watermark.svg" className="absolute left-10 scale-[5] bottom-24 z-0" />
			<img src="/watermark.svg" className="absolute right-10 scale-[3] top-12 " />
		</div >
	)
}
