import { KeyThemesSection } from "@/components/about/KeyThemes";
import { ObjectivesSection } from "@/components/Objective";

export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col *:mx-auto text-background bg-foreground rounded-b-[4rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
				<div className="flex flex-col *:mx-auto mt-24 lg:mt-52">
					<div className="text-[2rem] lg:text-[3.4rem] font-extrabold text-center leading-tight">WHAT DO WE DO</div>
					<div className="text-center w-[50rem] lg:w-[60rem] py-8">EBSB is a programme for promoting national integration through systematic exchange between paired institutes in the cultural, literary and linguistic fields. We intend to learn the linguistic and cultural aspects of the home state of our paired institute, covering history, culture, language, cuisine, festivals, clothing etc. <br /><br />The EBSB club has been formed at IITH to carry forward activities under the programme with our paired institute, IIT BHU. We aim to celebrate a plethora of Indian festivals and customs (paying special attention to those of Uttar Pradesh) in ways which are both enjoyable and informative which would thereby educate our fellow students while having fun.</div>
					<img src="/about/head.svg" />
				</div>
				<img
					src="/watermark.svg"
					className="w-fit left-0 absolute" />
				<img
					src="/watermark.svg"
					className="w-fit right-0 absolute scale-x-[-1]" />
			</div>
			<KeyThemesSection />
			<div className="flex flex-row px-8 mt-8 mb-24 *:px-6 *:py-10 *:rounded-3xl *:mx-20 h-[30rem] *:h-[14rem] *:w-[24rem]">
				<div className="flex text-center flex-col bg-foreground text-background self-center">
					<div className="text-2xl font-bold mb-8">MISSION</div>
					<div className="leading-tight">To celebrate unity in diversity, promote national integration, showcase rich heritage, and foster learning.</div>
				</div>
				<div className="flex text-center flex-col bg-foreground text-background self-end">
					<div className="text-2xl font-bold mb-8">VISION</div>
					<div className="leading-tight">To celebrate and strengthen India's cultural diversity, fostering unity and interdependence among its people.</div>
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
