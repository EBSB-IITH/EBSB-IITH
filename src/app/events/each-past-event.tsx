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
	[year: string]: { [event: string]: { title: string; description: string; photos: string[]; videos: string[]; matter: string } };
} = {
	"2024": {
		onam: {
			title: "Onam 2024",
			description: "Onam celebrations in 2024 with vibrant festivities.",
			photos: ["/photos/onam2024_1.jpg", "/photos/onam2024_2.jpg"],
			videos: ["/videos/onam2024_1.mp4"],
			matter: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations."
		},
		dusshera: {
			title: "Dusshera 2024",
			description: "Celebration of victory of good over evil during Dusshera 2024.",
			photos: ["/photos/dusshera2024_1.jpg", "/photos/dusshera2024_2.jpg"],
			videos: ["/videos/dusshera2024_1.mp4"],
			matter: "Dusshera 2024 was celebrated with pomp and grandeur, with large processions and festivities."
		}
	},
	"2023": {
		onam: {
			title: "Onam 2023",
			description: "Onam celebrations in 2023.",
			photos: ["/photos/onam2023_1.jpg"],
			videos: ["/videos/onam2023_1.mp4"],
			matter: "The 2023 event included a grand feast and traditional dances."
		},
		dusshera: {
			title: "Dusshera 2023",
			description: "The celebration of Dusshera in 2023.",
			photos: ["/photos/dusshera2023_1.jpg"],
			videos: ["/videos/dusshera2023_1.mp4"],
			matter: "Dusshera 2023 saw large-scale participation with cultural events."
		}
	}
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
