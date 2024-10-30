import { WhiteButton } from "@/components/Button";

export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col *:mx-auto overflow-clip text-background bg-foreground rounded-b-[4rem] lg:rounded-b-[8rem] pt-[2rem] relative" >
				<div className="flex flex-col *:mx-auto mt-24 mb-20 lg:mb-36 z-10 lg:mt-52">
					<div className="z-10 text-[1.8rem] lg:text-[3.4rem] w-[20rem] lg:w-[40rem] font-extrabold text-center leading-tight">YUVA SANGAM’24</div>
					<div className="text-center text-[0.9rem] lg:text-[1rem] w-[16rem] lg:w-[38rem] py-8 z-10">The program aims to provide participants with a deep understanding of the diverse cultural, traditional, and developmental aspects of different states while facilitating youth interactions.</div>
					<div className="pt-16">
						<WhiteButton text="REGISTER NOW" source="https://ebsb.aicte-india.org/" />
					</div>
				</div>
				<img
					src="watermark.svg"
					className="w-fit pointer-events-none left-[3rem] lg:left-[10rem] top-[3rem] lg:top-[10rem] absolute scale-[3] lg:scale-[5]" />
				<img
					src="watermark.svg"
					className="w-fit pointer-events-none z-0 right-[3rem] lg:right-[10rem] bottom-[3rem] lg:bottom-[10rem] absolute scale-[-3] lg:scale-[-5]" />
			</div>

			<div className="mx-12 lg:mx-64 leading-snug mt-20 mb-20 lg:mb-28 text-center ">
				Ek Bharat Shreshtha Bharat Yuva Sangam (युवा संगम) Phase-III is a Government of India initiative aimed at fostering people-to-people connections, especially among the youth throughout the nation. This phase of the program focuses on organizing exposure tours for young individuals, primarily students from higher educational institutions and other young people from different parts of India. These tours take them to various states in the country, offering them an immersive experience in various aspects of life.<br /><br />During these tours, the participants will gain exposure in five key areas: Paryatan (Tourism), Parampara (Traditions), Pragati (Development), Paraspar Sampark (People-to-people connect), and Prodyogik (Technology). The program aims to provide participants with a deep understanding of the diverse cultural, traditional, and developmental aspects of different states while facilitating youth interactions.
			</div>

			<div className="text-center mb-20 lg:mb-28">
				<div className="font-bold text-[2rem]">ABOUT IIT HYDERABAD</div>
				<div className="mx-8 lg:mx-40 mt-8 mb-10 lg:mb-16">The Indian Institute of Technology Hyderabad (IITH) is a distinguished institution known for its excellence in science and technology education. Established in 2008, IITH consistently ranks among India's top 10 engineering institutes. It offers a diverse range of undergraduate programs, encouraging students to explore various disciplines and engage in cutting-edge research.</div>
				<img src="yuva-sangam/about-iith.png" className="mx-auto px-6 lg:px-24" />
			</div>


			<div className="flex flex-col lg:flex-row px-6 lg:px-24 mb-20 lg:mb-28">
				<div className="flex flex-col">
					<div className="font-bold text-center lg:text-start text-[2rem]">MEET OUR DIRECTOR</div>
					<img src="yuva-sangam/director.png" className="block lg:hidden px-8 mt-4 mb-8" />
					<div className="lg:h-full lg:flex lg:flex-row ">
						<div className="mx-auto text-center lg:mr-24 lg:self-end mb-4">Prof. B.S. Murty is the Director of Indian Institute of Technology Hyderabad. His academic journey commenced with a Diploma in Metallurgy in 1983 from Govt. Polytechnic, Vijayawada, followed by a BE from VRCE Nagpur in 1986 and an ME from IISc Bangalore in 1988. He earned his PhD in 1992, also from IISc, Bangalore. Prof. Murty's illustrious career includes 12 years of service at IIT Kharagpur, followed by his role as a Professor at IIT Madras since 2004. Currently, he holds the esteemed position of Institute Professor at IIT Madras and serves as an Adjunct Professor at Toronto Metropolitan University and the University of British Columbia, Canada.</div>
					</div>
				</div>
				<img src="yuva-sangam/director.png" className="hidden lg:block w-1/3" />
			</div>

			<div className="text-center mb-20 lg:mb-28">
				<div className="font-bold text-[2rem]">ABOUT HYDERABAD</div>
				<div className="mx-6 lg:mx-40 mt-8 mb-16">Hyderabad, a city steeped in history and rich in cultural diversity, stands as a testament to the confluence of the past and the present. The Charminar, a magnificent monument, dating back to the 16th century, stands as an architectural marvel, encapsulating the city's historical grandeur. The world-renowned Golconda Fort, with its magical acoustic structure, showcases the technological brilliance of yesteryears.</div>
				<img src="yuva-sangam/about-hyderabad.png" className="mx-auto px-6 lg:px-24" />
			</div>

			<div className="flex flex-col mx-6 lg:mx-24 py-8 lg:py-12 border-black border-2 rounded-[1.4rem] ">
				<div className="text-center font-bold text-[2rem]">HOW TO REACH</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto lg:grid-rows-3 gap-2 lg:gap-4 pt-8 lg:pt-16 px-6 lg:px-12 leading-snug *:mb-4">

					<div className="">
						<p className="font-medium text-lg">From Mahatma Gandhi Bus Station (54km)</p>
						<ul className="list-disc ml-6 pr-12 mt-2">
							<li>Head north towards Mumbai Hwy/NH 65</li>
							<li>Get Via Kukatpally, Patancheruvu</li>
							<li>Follow ORR to Mumbai Hwy/NH 65</li>
							<li>Merge onto ORR</li>
							<li>Take exit towards Mumbai/NH65</li>
							<li>Drive to Mumbai Hwy/NH 65 for 15 km, you will find the sign board of IITH on Right side</li>
						</ul>
					</div>

					<div>
						<p className="font-medium text-lg">Metro Route</p>
						<ul className="list-disc ml-6 pr-12 mt-2">
							<li>Reach the Secunderabad-East Metro station which is about 600 mtrs from the Secunderabad Railway station.</li>
							<li>Take a ticket to Miyapur Station. You need to change metros to reach Miyapur Station.</li>
							<li>Board a metro and get down in Ameerpet Station</li>
							<li>Board a metro towards Miyapur Station</li>
							<li>Take a bus from Miyapur Bus-stop to Patancheru Bus Station</li>
							<li>Take a bus to Sangareddy Town and you will find the sign board of IITH on Right side</li>
						</ul>
					</div>

					<div>
						<p className="font-medium text-lg">From Airport (64km)</p>
						<ul className="list-disc ml-6 pr-12 mt-2">
							<li>Get on ORR in Gandiguda from Airport Approach Road</li>
							<li>Follow ORR to Muthangi, Hyderabad. Take exit 3 from ORR</li>
							<li>Drive to Mumbai Hwy/NH 9 for 15 km, you will find the sign board of IITH on Right side</li>
						</ul>
					</div>

					<div>
						<p className="font-medium text-lg">From Hitech City (38km)</p>
						<ul className="list-disc ml-6 pr-12 mt-2" >
							<li>Take Gachibowli - Miyapur Rd to NH65 in Hafeezpet 19 min (6.9 km)</li>
							<li>Drive to NH65 in Khandi</li>
						</ul>
					</div>

					<div>
						<p className="font-medium text-lg">From Secunderabad Railway Station (50km)</p>
						<ul className="list-disc ml-6 pr-12 mt-2">
							<li>Take SD Road to Mahatma Gandhi Rd/NH 7 in Hyderabad</li>
							<li>Follow NH 7 to Old Airport Rd in New Bowenpally</li>
							<li>Continue on Old Airport Rd to Bhavani Nagar</li>
							<li>Drive to Mumbai Hwy/NH 65</li>
							<li>Continue to drive on Mumbai Hwy/NH 65, you will find the sign board of IITH on Right side</li>
						</ul>
					</div>

					<div>
						<p className="font-medium text-lg">MMTS Route</p>
						<ul className="list-disc ml-6 pr-12 mt-2">
							<li>Take an MMTS from Secunderabad Railway Station to Lingampally Railway Station</li>
							<li>Take a bus from Lingampally Railway Station to Lingampally Bus stand</li>
							<li>Take a bus to Patancheru Bus stand</li>
							<li>Take a bus to Sangareddy Town and you will find the sign board of IITH on Right side</li>
						</ul>
					</div>

				</div>
			</div>

		</div >

	)
}
