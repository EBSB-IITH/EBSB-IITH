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
	[year: string]: { [event: string]: { title: string; description: string; photos: string[];label_photos: string[]; videos: string[]; matter1: string;matter2:string;date: string } };
} = {
	"2024": {
		onam: {	
			title: "Onam'24",
			description: "Onam, the splendid harvest festival of Kerala, is a vibrant celebration that unites the state with an aura of enthusiasm and joy. This cherished tradition symbolizes the rich cultural heritage and communal harmony of Kerala. It is a time when the people of Kerala come together to welcome the mythical King Mahabali, adorning their homes with colorful floral arrangements and preparing a sumptuous feast.",
			photos: ["/onam24/onam24-1.png", "/onam24/onam24-2.png","/onam24/onam24-3.png","/onam24/onam24-4.png"],
			label_photos:["/photos/tree2,png","/photos/tree1.png"],
			videos: [""],
			matter1: "During our grand Onam celebration in August 2023, the EBSB Team of 2023-24 infused the spirit of this festive season with a diverse range of enjoyable activities. Participants gathered near the Old Mess Lawns to partake in the merriment.",
			matter2:"From the exhilarating Tug of War, where teams competed to test their rope-whispering skills, to the playful Sundarikku Pottuthodal game that combined precision and creativity, the event was a delightful blend of tradition and fun. Musical Chairs added a rhythm to the festivities, with contestants dancing their way to a seat. The Lemon and Spoon challenge turned a simple fruit into a high-stakes companion on an exciting journey to victory. Finally, the Athapookalam, a flower rangoli, transformed the venue into a colorful art gallery curated by creative hands. It was a delightful celebration that left everyone with cherished memories and a deeper appreciation of Onam and Kerala's vibrant culture.",
			date: "12 th October "
		},
		dusshera: {
			title: "Dusshera'24",
			description: "Dussehra, celebrating the victory of good over evil, was observed with activities highlighting India’s cultural diversity. The event aimed to bring together different traditions and develop a sense of unity within the community. It also provided an opportunity for participants to showcase their creativity and cultural knowledge through various competitions.",
			photos: ["/photos/dusshera2023_1.jpg"],
			label_photos:["/dusshera/24/diya.svg","/dusshera/24/diya.svg"],
			videos: ["/videos/dusshera2023_1.mp4"],
			matter1: "On October 17th, the Golu Doll Competition featured arranged dolls portray stories from Indian culture, while the Rangoli Competition displayed beautiful designs that reflected the beauty of the festival. On October 19th, the Telangana tradition of Bathukamma saw participants making floral arrangements representing unity. This was followed by a Garba Night, where everyone participated in traditional Garba and Dandiya dances.",
			matter2:"The venue's decorations and a photo booth added to the overall atmosphere of fun and celebration. The two-day event captured the essence of Dussehra through creative expression, cultural practices, and the joyful involvement of the community.",
			date: "17 th October "
		},
		holi: {
			title: "Holi'24",
			description: "The celebration of Holi in 2023.",
			photos: ["/photos/holi2023_1.jpg"],
			label_photos:["/holi/23/colours.png","/holi/23/colours.svg"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
		ethnicnight:{
			title: "Ethnic Night'24",
			description: "An enchanting evening of music, dance, and art, Cultural Canvas brought the diverse beauty of our nation to life at the New Mess Lawns.",
			photos: ["/photos/holi2023_1.jpg"],
			label_photos:["/ethnicNight/23/woman.svg","/ethnicNight/23/man.svg"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "With captivating performances of classical dances, regional poetry, and soulful music, the event dazzled and united the community. Engaging games like ring toss and the Saree Draping Challenge added fun and excitement, while a grand ramp walk showcased traditional wear in all its glory.",
			matter2:"The night ended on a high with a screening of ‘RRR,’ drawing over 500 attendees. EBSB members created buzz through creative PR activities, including rose invitations and a vibrant photo booth, leaving everyone with cherished memories of a night celebrating unity in diversity.",
			date: "12 th October "
		},
		sankranti:{
			title: "Sankranti'24",
			description: "Makar Sankranti is more than just a seasonal festival. It is an important cultural event that promotes unity, diversity, and the richness of India’s heritage. Celebrated across the country with different names and customs, this festival marks the transition of the Sun into Capricorn symbolizing the shift towards longer days representing hope, renewal, and new beginnings.", 
			photos: ["/photos/holi2023_1.jpg"],
			label_photos:["/photos/tree2.png","/photos/tree1.png"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "Makar Sankranthi was celebrated harmoniously by combining tradition with engaging activities. The evening began around the glowing Lohri bonfire, as students gathered to embrace the spirit of togetherness and celebration. A photobooth; crafted by the EBSB team, allowed participants to capture memorable moments against colorful backdrops.",
			matter2:"The celebration also featured captivating Shuffle and Vibes performances, alongside Kite flying and Rangoli competitions, showcasing students’ artistic talents. Friendly competition in games such as Kabaddi, Kho-Kho, and Dodgeball further enhanced the teamwork. Overall, the event celebrated cultural heritage while promoting community engagement.",
			date: "12 th October "
		}
	},
	"2023": {
		onam: {
			title: "Onam'23",
			description: "Onam, the splendid harvest festival of Kerala, is a vibrant celebration that unites the state with an aura of enthusiasm and joy. This cherished tradition symbolizes the rich cultural heritage and communal harmony of Kerala. It is a time when the people of Kerala come together to welcome the mythical King Mahabali, adorning their homes with colorful floral arrangements and preparing a sumptuous feast.",
			photos: ["/onam24/onam24-1.png", "/onam24/onam24-2.png","/onam24/onam24-3.png","/onam24/onam24-4.png"],
			label_photos:["/photos/tree2,png","/photos/tree1.png"],
			videos: [""],
			matter1: "During our grand Onam celebration in August 2023, the EBSB Team of 2023-24 infused the spirit of this festive season with a diverse range of enjoyable activities. Participants gathered near the Old Mess Lawns to partake in the merriment.",
			matter2:"From the exhilarating Tug of War, where teams competed to test their rope-whispering skills, to the playful Sundarikku Pottuthodal game that combined precision and creativity, the event was a delightful blend of tradition and fun. Musical Chairs added a rhythm to the festivities, with contestants dancing their way to a seat. The Lemon and Spoon challenge turned a simple fruit into a high-stakes companion on an exciting journey to victory. Finally, the Athapookalam, a flower rangoli, transformed the venue into a colorful art gallery curated by creative hands. It was a delightful celebration that left everyone with cherished memories and a deeper appreciation of Onam and Kerala's vibrant culture.",
			date: "12 th October "
		},
		dusshera: {
			title: "Dusshera'23",
			description: "Dussehra, celebrating the victory of good over evil, was observed with activities highlighting India’s cultural diversity. The event aimed to bring together different traditions and develop a sense of unity within the community. It also provided an opportunity for participants to showcase their creativity and cultural knowledge through various competitions.",
			photos: ["/photos/dusshera2023_1.jpg"],
			label_photos:["/dusshera/24/diya.svg","/dusshera/24/diya.svg"],
			videos: ["/videos/dusshera2023_1.mp4"],
			matter1: "On October 17th, the Golu Doll Competition featured arranged dolls portray stories from Indian culture, while the Rangoli Competition displayed beautiful designs that reflected the beauty of the festival. On October 19th, the Telangana tradition of Bathukamma saw participants making floral arrangements representing unity. This was followed by a Garba Night, where everyone participated in traditional Garba and Dandiya dances.",
			matter2:"The venue's decorations and a photo booth added to the overall atmosphere of fun and celebration. The two-day event captured the essence of Dussehra through creative expression, cultural practices, and the joyful involvement of the community.",
			date: "17 th October "
		},
		diwali: {
			title: "Diwali'23",
			description: "Diwali, the Festival of Lights, not only marks the triumph of light over darkness but also brings people together in a celebration of unity, joy, and cultural richness.This vibrant festival marks newbeginnings, prosperity, and the victory of hope. Celebrate Diwali by embracing its spirit of togetherness, joy, and renewal!",
			photos: ["/photos/diwali2023_1.jpg"],
			label_photos:["/dusshera/24/diya.svg","/dusshera/24/diya.svg"],
			videos: ["/videos/diwali2023_1.mp4"],
			matter1: "Our Diwali event brought vibrant energy to the campus with a series of festive activities that sparked joy and togetherness. The celebrations kicked off with a Diya Painting Competition, where participants adorned clay lamps with colorful designs, symbolizing the festival’s message of light. This was followed by an Origami Event, where delicate paper lanterns were crafted, adding to the creative atmosphere. The Mehendi Competition then showcased intricate henna patterns, blending tradition with artistry.",
			matter2:"The excitement continued with a playful Limbo Challenge, as participants skillfully twisted under the bar, while the Cup-a-loon Game tested balance and added a dash of fun. Shuffle’s energetic dance performance further electrified the crowd before the evening culminated in the Lighting of Lanterns, filling the night sky with glowing lights and creating a truly magical spectacle to end the celebration.",
			date: "12 th October "
		},
		sankranti:{
			title: "Sankranti'23",
			description: "Makar Sankranti is more than just a seasonal festival. It is an important cultural event that promotes unity, diversity, and the richness of India’s heritage. Celebrated across the country with different names and customs, this festival marks the transition of the Sun into Capricorn symbolizing the shift towards longer days representing hope, renewal, and new beginnings.", 
			photos: ["/photos/holi2023_1.jpg"],
			label_photos:["/photos/tree2.png","/photos/tree1.png"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "Makar Sankranthi was celebrated harmoniously by combining tradition with engaging activities. The evening began around the glowing Lohri bonfire, as students gathered to embrace the spirit of togetherness and celebration. A photobooth; crafted by the EBSB team, allowed participants to capture memorable moments against colorful backdrops.",
			matter2:"The celebration also featured captivating Shuffle and Vibes performances, alongside Kite flying and Rangoli competitions, showcasing students’ artistic talents. Friendly competition in games such as Kabaddi, Kho-Kho, and Dodgeball further enhanced the teamwork. Overall, the event celebrated cultural heritage while promoting community engagement.",
			date: "12 th October "
		},
		ethnic: {
			title: "Ethnic Night'23",
			description: "An enchanting evening of music, dance, and art, Cultural Canvas brought the diverse beauty of our nation to life at the New Mess Lawns.",
			photos: ["/photos/holi2023_1.jpg"],
			label_photos:["/ethnicNight/23/woman.svg","/ethnicNight/23/man.svg"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "With captivating performances of classical dances, regional poetry, and soulful music, the event dazzled and united the community. Engaging games like ring toss and the Saree Draping Challenge added fun and excitement, while a grand ramp walk showcased traditional wear in all its glory.",
			matter2:"The night ended on a high with a screening of ‘RRR,’ drawing over 500 attendees. EBSB members created buzz through creative PR activities, including rose invitations and a vibrant photo booth, leaving everyone with cherished memories of a night celebrating unity in diversity.",
			date: "12 th October "
		},
		holi: {
			title: "Holi'23",
			description: "The celebration of Holi in 2023.",
			photos: ["/photos/holi2023_1.jpg"],
			label_photos:["/holi/23/colours.png","/holi/23/colours.svg"],
			videos: ["/videos/holi2023_1.mp4"],
			matter1: "A detailed description of the Onam 2024 event with details of the rituals, cultural programs, and celebrations.",
			matter2:"",
			date: "12 th October "
		},
	},
	
};

  
export function PastEvent_details({ title, type, year, description, matter }: PastEvent) {
	return (
		<div className="flex flex-col p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg">
		  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{title}</div>
		  <div className="text-sm sm:text-base md:text-lg text-gray-600 mb-1 sm:mb-2">{type}</div>
		  <div className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3">{year}</div>
		  <div className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">{description}</div>
		  <div className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">{matter}</div>
		  <WhiteButton text="Explore More"/>
		</div>
	  );
}


// Data for past events
const eventsData: { [year: string]: PastEvent[] } = {
	"2024": [
	  { title: "ONAM 2024", type: "Celebrations", year: "2024", description: "", matter: "" },
	],
	"2023": [
	  { title: "ONAM 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
	  { title: "Dusshera 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
	  { title: "Diwali 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
	  { title: "Ethnic Night 2023", type: "Celebrations", year: "2023", description: "", matter: "" },
	  { title: "Holi 2023", type: "Celebrations", year: "2023", description: "", matter: "" }
	],
	"2022": [
	  { title: "ONAM 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
	  { title: "Dusshera 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
	  { title: "Diwali 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
	  { title: "Ethnic Night 2022", type: "Celebrations", year: "2022", description: "", matter: "" },
	  { title: "Holi 2022", type: "Celebrations", year: "2022", description: "", matter: "" }
	]
  };