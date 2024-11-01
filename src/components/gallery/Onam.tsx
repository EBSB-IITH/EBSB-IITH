import Image from "next/image"
import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle"

export function OnamGallery24() {
return (
		<div className={outerDivStyle}>
			<div className={headingStyle}>ONAM '24</div>
			<div className={innerDivStyle}>
				<div>
					<Image fill alt="" src="onam/24/1.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/2.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/3.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/4.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/5.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/6.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/7.jpg" />
				</div>
				<div>
					<Image fill alt=""  src="onam/24/8.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/9.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/10.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/11.jpg" />
				</div>
				<div>
					<Image fill alt="" src="onam/24/12.jpg" />
				</div>
			</div>
		</div >
	)
}
