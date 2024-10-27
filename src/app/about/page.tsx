import { KeyThemesSection } from "@/components/about/KeyThemes";
import { ObjectivesSection } from "@/components/Objective";

export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col *:mx-auto overflow-clip text-background bg-foreground rounded-b-[4rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
				<div className="flex flex-col *:mx-auto mt-24 z-10 lg:mt-52">
					<div className="text-[1.8rem] lg:text-[3.4rem] font-extrabold text-center leading-tight">WHAT DO WE DO</div>
					<div className="text-center text-[0.9rem] lg:text-[1rem] w-[20rem] lg:w-[60rem] py-8">EBSB is a programme for promoting national integration through systematic exchange between paired institutes in the cultural, literary and linguistic fields. We intend to learn the linguistic and cultural aspects of the home state of our paired institute, covering history, culture, language, cuisine, festivals, clothing etc. <br /><br />The EBSB club has been formed at IITH to carry forward activities under the programme with our paired institute, IIT BHU. We aim to celebrate a plethora of Indian festivals and customs (paying special attention to those of Uttar Pradesh) in ways which are both enjoyable and informative which would thereby educate our fellow students while having fun.</div>
					<img src="/about/head.png" className="z-10 px-16 mt-4" />
				</div>
				<img
					src="/watermark.svg"
					className="w-fit left-[3rem] lg:left-[10rem] top-[3rem] lg:top-[10rem] absolute scale-[4] lg:scale-[5]" />
				<img
					src="/watermark.svg"
					className="w-fit z-0 right-[3rem] lg:right-[10rem] bottom-[3rem] lg:bottom-[10rem] absolute scale-[-4] lg:scale-[-5]" />
			</div>
			<KeyThemesSection />
			<div className="flex flex-col lg:flex-row px-8 *:my-4 mt-8 mb-20 lg:mb-24 *:px-6 *:py-10 *:rounded-[2.4rem] lg:*:rounded-3xl lg:*:mx-20 lg:h-[30rem] *:h-[14rem] lg:*:w-[24rem]">
				<div className="flex text-center flex-col bg-foreground text-background self-center">
					<div className="text-2xl font-bold mb-8">MISSION</div>
					<div className="leading-tight">To celebrate unity in diversity, promote national integration, showcase rich heritage, and foster learning.</div>
				</div>
				<div className="flex text-center flex-col bg-foreground text-background self-center lg:self-end">
					<div className="text-2xl font-bold mb-8">VISION</div>
					<div className="leading-tight">To celebrate and strengthen India{"\'"}s cultural diversity, fostering unity and interdependence among its people.</div>
				</div>
				<div className="flex text-center flex-col bg-foreground text-background self-center">
					<div className="text-2xl font-bold mb-8">PURPOSE</div>
					<div className="leading-tight">We celebrate diverse festivals, promoting unity in variety through online and media showcases, highlighting state features.</div>
				</div>
			</div>

			<ObjectivesSection />
		</div >
	)
}
