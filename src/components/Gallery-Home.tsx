import Image from "next/image";
import { innerDivStyle } from "./gallery/eventGalleryStyle";

export default function GalleryHome() {
	return (
		<div className={innerDivStyle}>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="onam/24/3.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="diwali/25/3.jpeg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="diwali/23/2.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="sankranti/23/3.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="ethnicNight/23/4.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="ethnicNight/23/7.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="dusshera/23/3.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="diwali/23/5.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="sankranti/23/5.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="onam/24/6.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="onam/24/5.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="sankranti/23/7.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="ethnicNight/23/9.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="dusshera/23/11.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="diwali/23/1.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="onam/24/7.jpg" />
			</div>
			<div className="relative">
				<Image alt="" layout="fill" objectFit="cover" src="sankranti/23/11.jpg" />
			</div>
		</div >
	)
}
