import { WhiteButton } from "@/components/Button";
export interface PastEvent {
	title: string,
	type: string,
	year: string,
	description: string,
	matter: string
}

// Data structure for past event details
export const eventDetails: {
	[year: string]: { [event: string]: { title: string; description: string; photos: string[]; videos: string[]; matter1: string;matter2:string;date: string } };
} = {
	"2024": {
		onam: {
			title: "Onam 2024",
			description: "Onam, the splendid harvest festival of Kerala, is a vibrant celebration that unites the state with an aura of enthusiasm and joy. This cherished tradition symbolizes the rich cultural heritage and communal harmony of Kerala. It is a time when the people of Kerala come together to welcome the mythical King Mahabali, adorning their homes with colorful floral arrangements and preparing a sumptuous feast.",
			photos: ["/onam24/onam24-1.png", "/onam24/onam24-2.png","/onam24/onam24-3.png","/onam24/onam24-4.png"],
			videos: ["/videos/onam2024_1.mp4"],
			matter1: "During our grand Onam celebration in August 2023, the EBSB Team of 2023-24 infused the spirit of this festive season with a diverse range of enjoyable activities. Participants gathered near the Old Mess Lawns to partake in the merriment.",
			matter2:"From the exhilarating Tug of War, where teams competed to test their rope-whispering skills, to the playful Sundarikku Pottuthodal game that combined precision and creativity, the event was a delightful blend of tradition and fun. Musical Chairs added a rhythm to the festivities, with contestants dancing their way to a seat. The Lemon and Spoon challenge turned a simple fruit into a high-stakes companion on an exciting journey to victory. Finally, the Athapookalam, a flower rangoli, transformed the venue into a colorful art gallery curated by creative hands. It was a delightful celebration that left everyone with cherished memories and a deeper appreciation of Onam and Kerala's vibrant culture.",
			date: "12 th October "
		},
		dusshera: {
			title: "Dusshera 2024",
			description: "Celebration of victory of good over evil during Dusshera 2024.",
			photos: ["/photos/dusshera2024_1.jpg", "/photos/dusshera2024_2.jpg"],
			videos: ["/videos/dusshera2024_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		}
	},
	"2023": {
		onam: {
			title: "Onam 2023",
			description: "Onam celebrations in 2023.",
			photos: ["/photos/onam2023_1.jpg"],
			videos: ["/videos/onam2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
		dusshera: {
			title: "Dusshera 2023",
			description: "The celebration of Dusshera in 2023.",
			photos: ["/photos/dusshera2023_1.jpg"],
			videos: ["/videos/dusshera2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
		diwali: {
			title: "Diwali 2023",
			description: "The celebration of Diwali in 2023.",
			photos: ["/photos/diwali2023_1.jpg"],
			videos: ["/videos/diwali2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
		ethnic: {
			title: "Ethnic Night 2023",
			description: "The celebration of Ethnic Night in 2023.",
			photos: ["/photos/ethnic2023_1.jpg"],
			videos: ["/videos/ethnic2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
		holi: {
			title: "Holi 2023",
			description: "The celebration of Holi in 2023.",
			photos: ["/photos/holi2023_1.jpg"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
	},
	
};

  
export function PastEvent_details({ title, type, year, description, matter }: PastEvent) {
	return (
		<div className="flex flex-col">
			<div>{title}</div>
			<div>{type}</div>
			<div>{year}</div>
			<div>{description}</div>
			<div>{matter}</div>

			<WhiteButton text="Explore More" />
		</div>
	)
}

export function PastEventCarousel() {

}
