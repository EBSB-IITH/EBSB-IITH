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
	[year: string]: { [event: string]: { title: string; description: string; photos: string[]; label_photos: string[]; videos: string[]; matter1: string; matter2: string; date: string } };
} = {

	"2026": {
		sankranti: {
			title: "Sankranti'25",
			description: "Makar Sankranti, the festival of harvest and new beginnings, symbolizes joy, tradition, and togetherness. It marks the transition of the sun into Capricorn, ushering in longer days and fresh starts. Celebrated with beautiful kites, colorful rangoli, and age-old rituals, it is one of India’s most celebrated festivals.",
			photos: ["/sankranti/26/1.jpg","/sankranti/26/2.jpg","/sankranti/26/3.jpg","/sankranti/26/4.jpg","/sankranti/26/5.jpg","/sankranti/26/7.jpg","/sankranti/26/8.jpg","/sankranti/26/10.jpg","/sankranti/26/11.jpg","/sankranti/26/12.jpg","/sankranti/26/13.jpg","/sankranti/26/14.jpg","/sankranti/26/15.jpg","/sankranti/26/16.jpg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: [""],
			matter1: "EBSB celebrated Makar Sankranti with three joyful days of festivities, uniting students and staff in the spirit of the festival. The first day focused on traditional sports like dodgeball, kabaddi, and kho-kho, encouraging teamwork and energetic participation. The second day featured a DIY kite-making session and a warm bonfire, followed by mesmerizing cultural performances, including shuffle dance, soulful singing, and dhol beats, ending with a lively DJ night.",
			matter2: "The final day highlighted the festival’s essence with a fun kite-flying session and a colorful rangoli competition, leaving everyone with refreshing memories and a deep sense of togetherness.",
			date: ""
		},
	},
	
	"2025": {
		sankranti: {
			title: "Sankranti'25",
			description: "Makar Sankranti, the festival of harvest and new beginnings, symbolizes joy, tradition, and togetherness. It marks the transition of the sun into Capricorn, ushering in longer days and fresh starts. Celebrated with beautiful kites, colorful rangoli, and age-old rituals, it is one of India’s most celebrated festivals.",
			photos: ["/sankranti/25/1.jpg","/sankranti/25/2.jpg","/sankranti/25/3.jpg","/sankranti/25/4.jpg","/sankranti/25/5.jpg","/sankranti/25/7.jpg","/sankranti/25/8.jpg","/sankranti/25/10.jpg","/sankranti/25/11.jpg","/sankranti/25/12.jpg","/sankranti/25/13.jpg","/sankranti/25/14.jpg","/sankranti/25/15.jpg","/sankranti/25/16.jpg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: [""],
			matter1: "EBSB celebrated Makar Sankranti with three joyful days of festivities, uniting students and staff in the spirit of the festival. The first day focused on traditional sports like dodgeball, kabaddi, and kho-kho, encouraging teamwork and energetic participation. The second day featured a DIY kite-making session and a warm bonfire, followed by mesmerizing cultural performances, including shuffle dance, soulful singing, and dhol beats, ending with a lively DJ night.",
			matter2: "The final day highlighted the festival’s essence with a fun kite-flying session and a colorful rangoli competition, leaving everyone with refreshing memories and a deep sense of togetherness.",
			date: ""
		},
		diwali: {
			title: "Diwali'25",
			description: "Diwali, also known as the Festival of Lights, is one of the most beloved and widely celebrated festivals in India. Rooted in ancient traditions, it symbolizes the victory of good over evil, and knowledge over ignorance. Signifying new beginnings and prosperity, Diwali is a time for communities to come together, illuminating hearts with diyas, rangoli, and festive cheer. It is a celebration of hope, joy, and the enduring power of togetherness.",
			photos: ["/diwali/25/1.jpeg", "/diwali/25/2.jpeg", "/diwali/25/3.jpeg", "/diwali/25/4.jpeg", "/diwali/25/5.jpeg", "/diwali/25/6.jpeg", "/diwali/25/7.jpeg", "/diwali/25/8.jpeg, /diwali/25/9.jpeg"],
			label_photos: ["/dusshera/24/diya.svg", "/dusshera/24/diya.svg"],
			videos: [""],
			matter1: "During Diwali, the campus came alive with festive cheer as students and staff gathered to celebrate #KhushiyonWali Diwali through a variety of exciting events. Spanning three days, the celebrations were packed with creativity and enthusiasm. Beginning the first day with activities like Diya Painting, Mehndi design, and Clay modeling, allowed participants to showcase their artistic flair. The evening continued with an Origami lantern-making session, filling the atmosphere with a sense of teamwork and innovation.			",
			matter2: "To make the occasion more funny and interactive, the second day was organized with games such as Sweets on String, along with classic favorites like Musical Chairs and the festive-themed Diwali Bingo. As night fell, the sky lit up with glowing lanterns released by the attendees, symbolizing hope and unity.The celebrations on the third day reached a successful conclusion with an engaging Garba night, complemented by a captivating dance performance from the Shuffle team. This event significantly enhanced the overall festive atmosphere and left all attendees in high spirits.",
			date: ""
		},
		dusshera: {
			title: "DUSSEHRA'25",
			description: "Dussehra, celebrating the victory of good over evil, was observed with activities highlighting India’s cultural diversity. The event aimed to bring together different traditions and develop a sense of unity within the community. It also provided an opportunity for participants to showcase their creativity and cultural knowledge through various competitions.",
			photos: ["/dusshera/25/1.jpeg", "/dusshera/25/2.jpeg", "/dusshera/25/3.jpeg", "/dusshera/25/4.jpeg", "/dusshera/25/5.jpeg", "/dusshera/25/6.jpeg", "/dusshera/25/7.jpeg", "/dusshera/25/8.jpeg", "/dusshera/25/9.jpeg"],
			label_photos: ["/dusshera/24/diya.svg", "/dusshera/24/diya.svg"],
			videos: ["https://youtu.be/z9jeJwqYg3g?si=X1TcOLTDYCm7VWtM"],
			matter1: "On October 17th, the Golu Doll Competition featured arranged dolls portray stories from Indian culture, while the Rangoli Competition displayed beautiful designs that reflected the beauty of the festival. On October 19th, the Telangana tradition of Bathukamma saw participants making floral arrangements representing unity. This was followed by a Garba Night, where everyone participated in traditional Garba and Dandiya dances.",
			matter2: "The venue's decorations and a photo booth added to the overall atmosphere of fun and celebration. The two-day event captured the essence of Dussehra through creative expression, cultural practices, and the joyful involvement of the community.",
			date: " "
		},
		ethnicnight: {
			title: "ETHNIC NIGHT'25",
			description: "An enchanting evening of music, dance, and art, Ethnic Night brought the diverse beauty of our nation to life.",
			photos: ["/ethnicNight/25/1.jpeg", "/ethnicNight/25/2.jpeg", "/ethnicNight/25/3.jpeg", "/ethnicNight/25/4.jpeg", "/ethnicNight/25/5.jpeg", "/ethnicNight/25/6.jpeg", "/ethnicNight/25/7.jpeg", "/ethnicNight/25/8.jpeg", "/ethnicNight/25/9.jpeg"],
			label_photos: ["/ethnicNight/23/woman.svg", "/ethnicNight/23/man.svg"],
			videos: ["/videos/ethnic-night-24.mp4"],
			matter1: "With captivating performances of classical dances, regional poetry, and soulful music, the event dazzled and united the community. Engaging games like ring toss and the Saree Draping Challenge added fun and excitement, while a grand ramp walk showcased traditional wear in all its glory.",
			matter2: "The night ended on a high with a screening of ‘RRR,’ drawing over 500 attendees. EBSB members created buzz through creative PR activities, including rose invitations and a vibrant photo booth, leaving everyone with cherished memories of a night celebrating unity in diversity.",
			date: "March 2, 2024 "
		},
		onam: {
			title: "ONAM'25",
			description: "Onam, the splendid harvest festival of Kerala, is a vibrant celebration that unites the state with an aura of enthusiasm and joy. This cherished tradition symbolizes the rich cultural heritage and communal harmony of Kerala. It is a time when the people of Kerala come together to welcome the mythical King Mahabali, adorning their homes with colorful floral arrangements and preparing a sumptuous feast.",
			photos: ["/onam/25/1.jpeg", "/onam/25/2.jpeg", "/onam/25/3.jpeg", "/onam/25/5.jpeg", "/onam/25/6.jpeg", "/onam/25/7.jpeg", "/onam/25/8.jpeg", "/onam/25/9.jpeg", "/onam/25/4.jpeg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: [""],
			matter1: "During our grand Onam celebration in August 2023, the EBSB Team of 2023-24 infused the spirit of this festive season with a diverse range of enjoyable activities. Participants gathered near the Old Mess Lawns to partake in the merriment.",
			matter2: "From the exhilarating Tug of War, where teams competed to test their rope-whispering skills, to the playful Sundarikku Pottuthodal game that combined precision and creativity, the event was a delightful blend of tradition and fun. Musical Chairs added a rhythm to the festivities, with contestants dancing their way to a seat. The Lemon and Spoon challenge turned a simple fruit into a high-stakes companion on an exciting journey to victory. Finally, the Athapookalam, a flower rangoli, transformed the venue into a colorful art gallery curated by creative hands. It was a delightful celebration that left everyone with cherished memories and a deeper appreciation of Onam and Kerala's vibrant culture.",
			date: ""
		},
		
	},
	"2024": {
		diwali: {
			title: "Diwali'24",
			description: "Diwali, also known as the Festival of Lights, is one of the most beloved and widely celebrated festivals in India. Rooted in ancient traditions, it symbolizes the victory of good over evil, and knowledge over ignorance. Signifying new beginnings and prosperity, Diwali is a time for communities to come together, illuminating hearts with diyas, rangoli, and festive cheer. It is a celebration of hope, joy, and the enduring power of togetherness.",
			photos: ["/diwali/24/4.JPG", "/diwali/24/7.JPG", "/diwali/24/2.JPG", "/diwali/24/5.JPG", "/diwali/24/6.JPG", "/diwali/24/3.JPG", "/diwali/24/8.JPG", "/diwali/24/9.JPG", "/diwali/24/10.JPG", "/diwali/24/11.JPG", "/diwali/24/12.JPG", "/diwali/24/13.JPG", "/diwali/24/14.JPG", "/diwali/24/15.JPG", "/diwali/24/16.JPG", "/diwali/24/17.JPG", "/diwali/24/18.JPG", "/diwali/24/19.JPG", "/diwali/24/20.JPG", "/diwali/24/21.JPG", "/diwali/24/22.JPG", "/diwali/24/23.JPG", "/diwali/24/24.JPG", "/diwali/24/25.JPG", "/diwali/24/26.JPG", "/diwali/24/27.JPG", "/diwali/24/28.JPG", "/diwali/24/29.JPG"],
			label_photos: ["/dusshera/24/diya.svg", "/dusshera/24/diya.svg"],
			videos: [""],
			matter1: "During Diwali, the campus came alive with festive cheer as students and staff gathered to celebrate #KhushiyonWali Diwali through a variety of exciting events. Spanning three days, the celebrations were packed with creativity and enthusiasm. Beginning the first day with activities like Diya Painting, Mehndi design, and Clay modeling, allowed participants to showcase their artistic flair. The evening continued with an Origami lantern-making session, filling the atmosphere with a sense of teamwork and innovation.			",
			matter2: "To make the occasion more funny and interactive, the second day was organized with games such as Sweets on String, along with classic favorites like Musical Chairs and the festive-themed Diwali Bingo. As night fell, the sky lit up with glowing lanterns released by the attendees, symbolizing hope and unity.The celebrations on the third day reached a successful conclusion with an engaging Garba night, complemented by a captivating dance performance from the Shuffle team. This event significantly enhanced the overall festive atmosphere and left all attendees in high spirits.",
			date: ""
		},
		onam: {
			title: "ONAM'24",
			description: "Onam, the splendid harvest festival of Kerala, is a vibrant celebration that unites the state with an aura of enthusiasm and joy. This cherished tradition symbolizes the rich cultural heritage and communal harmony of Kerala. It is a time when the people of Kerala come together to welcome the mythical King Mahabali, adorning their homes with colorful floral arrangements and preparing a sumptuous feast.",
			photos: ["/onam/24/1.jpg", "/onam/24/2.jpg", "/onam/24/3.jpg", "/onam/24/4.jpg", "/onam/24/5.jpg", "/onam/24/6.jpg", "/onam/24/7.jpg", "/onam/24/8.jpg", "/onam/24/9.jpg", "/onam/24/10.jpg", "/onam/24/11.jpg", "/onam/24/12.jpg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: ["https://youtu.be/3oksFLAvUcc?si=kHUbEXPvTX80OvyZ"],
			matter1: "During our grand Onam celebration in September 2024, the EBSB Team of 2024-25 infused the spirit of this festive season with a diverse range of enjoyable activities. Participants gathered near the Old Mess Lawns to partake in the merriment.",
			matter2: "From the exhilarating Tug of War, where teams competed to test their rope-whispering skills, to the playful Sundarikku Pottuthodal game that combined precision and creativity, the event was a delightful blend of tradition and fun. Finally, the Athapookalam, a flower rangoli, transformed the venue into a colorful art gallery curated by creative hands. It was a delightful celebration that left everyone with cherished memories and a deeper appreciation of Onam and Kerala's vibrant culture.",
			date: "September 15, 2024"
		},
		// dusshera: {
		// 	title: "Dusshera'24",
		// 	description: "Dussehra, celebrating the victory of good over evil, was observed with activities highlighting India’s cultural diversity. The event aimed to bring together different traditions and develop a sense of unity within the community. It also provided an opportunity for participants to showcase their creativity and cultural knowledge through various competitions.",
		// 	photos: ["/dusshera/23/1.jpg","/dusshera/23/2.jpg","/dusshera/23/3.jpg","/dusshera/23/4.jpg","/dusshera/23/5.jpg","/dusshera/23/6.jpg","/dusshera/23/7.jpg","/dusshera/23/8.jpg","/dusshera/23/9.jpg","/dusshera/23/10.jpg","/dusshera/23/11.jpg"],
		// 	label_photos:["/dusshera/24/diya.svg","/dusshera/24/diya.svg"],
		// 	videos: [""],
		// 	matter1: "On October 17th, the Golu Doll Competition featured arranged dolls portray stories from Indian culture, while the Rangoli Competition displayed beautiful designs that reflected the beauty of the festival. On October 19th, the Telangana tradition of Bathukamma saw participants making floral arrangements representing unity. This was followed by a Garba Night, where everyone participated in traditional Garba and Dandiya dances.",
		// 	matter2:"The venue's decorations and a photo booth added to the overall atmosphere of fun and celebration. The two-day event captured the essence of Dussehra through creative expression, cultural practices, and the joyful involvement of the community.",
		// 	date: "17 th October "
		// },
		holi: {
			title: "HOLI'24",
			description: "Holi, the festival of colors, truly unites diverse cultures across India. Celebrated with colors and joyous festivities, it fosters harmony and brotherhood",
			photos: ["/holi/23/1.jpg", "/holi/23/2.jpg", "/holi/23/3.jpg", "/holi/23/4.jpg", "/holi/23/5.jpg", "/holi/23/6.jpg", "/holi/23/7.jpg", "/holi/23/8.jpg", "/holi/23/9.jpg", "/holi/23/10.jpg"],
			label_photos: ["/holi/23/colours.png", "/holi/23/colours.svg"],
			videos: [""],
			matter1: "Holi celebrations at IITH are marked by joy and excitement, creating an atmosphere of pure enjoyment.",
			matter2: " Participants come together to celebrate with a rich array of colors and water, transforming the surroundings into a breathtaking display of colorful magic. It’s a festive occasion that strengthens bonds and creates lasting memories.",
			date: "March 24, 2024 "
		},
		ethnicnight: {
			title: "ETHNIC NIGHT'24",
			description: "An enchanting evening of music, dance, and art, Ethnic Night brought the diverse beauty of our nation to life.",
			photos: ["/ethnicNight/23/1.jpg", "/ethnicNight/23/2.jpg", "/ethnicNight/23/3.jpg", "/ethnicNight/23/4.jpg", "/ethnicNight/23/5.jpg", "/ethnicNight/23/6.jpg", "/ethnicNight/23/7.jpg", "/ethnicNight/23/8.jpg", "/ethnicNight/23/9.jpg"],
			label_photos: ["/ethnicNight/23/woman.svg", "/ethnicNight/23/man.svg"],
			videos: ["/videos/ethnic-night-24.mp4"],
			matter1: "With captivating performances of classical dances, regional poetry, and soulful music, the event dazzled and united the community. Engaging games like ring toss and the Saree Draping Challenge added fun and excitement, while a grand ramp walk showcased traditional wear in all its glory.",
			matter2: "The night ended on a high with a screening of ‘RRR,’ drawing over 500 attendees. EBSB members created buzz through creative PR activities, including rose invitations and a vibrant photo booth, leaving everyone with cherished memories of a night celebrating unity in diversity.",
			date: "March 2, 2024 "
		},
		sankranti: {
			title: "SANKRANTI'24",
			description: "Makar Sankranti is more than just a seasonal festival. It is an important cultural event that promotes unity, diversity, and the richness of India’s heritage. Celebrated across the country with different names and customs, this festival marks the transition of the Sun into Capricorn symbolizing the shift towards longer days representing hope, renewal, and new beginnings.",
			photos: ["/sankranti/23/1.jpg", "/sankranti/23/5.jpg", "/sankranti/23/6.jpg", "/sankranti/23/7.jpg", "/sankranti/23/8.jpg", "/sankranti/23/9.jpg", "/sankranti/23/10.jpg", "/sankranti/23/2.jpg", "/sankranti/23/3.jpg", "/sankranti/23/4.jpg", "/sankranti/23/11.jpg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: ["https://youtu.be/pfx_lwd4hgg?si=lSsg5Frww5hgcu6w"],
			matter1: "Makar Sankranthi was celebrated harmoniously by combining tradition with engaging activities. The evening began around the glowing Lohri bonfire, as students gathered to embrace the spirit of togetherness and celebration. A photobooth; crafted by the EBSB team, allowed participants to capture memorable moments against colorful backdrops.",
			matter2: "The celebration also featured captivating Shuffle and Vibes performances, alongside Kite flying and Rangoli competitions, showcasing students’ artistic talents. Friendly competition in games such as Kabaddi, Kho-Kho, and Dodgeball further enhanced the teamwork. Overall, the event celebrated cultural heritage while promoting community engagement.",
			date: "January 13 - 15, 2024 "
		}
	},
	"2023": {
		onam: {
			title: "ONAM'23",
			description: "Onam, the splendid harvest festival of Kerala, is a vibrant celebration that unites the state with an aura of enthusiasm and joy. This cherished tradition symbolizes the rich cultural heritage and communal harmony of Kerala. It is a time when the people of Kerala come together to welcome the mythical King Mahabali, adorning their homes with colorful floral arrangements and preparing a sumptuous feast.",
			photos: ["/onam/24/7.jpg", "/onam/24/9.jpg", "/onam/24/4.jpg", "/onam/24/5.jpg", "/onam/24/6.jpg", "/onam/24/2.jpg", "/onam/24/8.jpg", "/onam/24/3.jpg", "/onam/24/10.jpg", "/onam/24/11.jpg", "/onam/24/12.jpg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: [""],
			matter1: "During our grand Onam celebration in August 2023, the EBSB Team of 2023-24 infused the spirit of this festive season with a diverse range of enjoyable activities. Participants gathered near the Old Mess Lawns to partake in the merriment.",
			matter2: "From the exhilarating Tug of War, where teams competed to test their rope-whispering skills, to the playful Sundarikku Pottuthodal game that combined precision and creativity, the event was a delightful blend of tradition and fun. Musical Chairs added a rhythm to the festivities, with contestants dancing their way to a seat. The Lemon and Spoon challenge turned a simple fruit into a high-stakes companion on an exciting journey to victory. Finally, the Athapookalam, a flower rangoli, transformed the venue into a colorful art gallery curated by creative hands. It was a delightful celebration that left everyone with cherished memories and a deeper appreciation of Onam and Kerala's vibrant culture.",
			date: ""
		},
		dusshera: {
			title: "DUSSEHRA'23",
			description: "Dussehra, celebrating the victory of good over evil, was observed with activities highlighting India’s cultural diversity. The event aimed to bring together different traditions and develop a sense of unity within the community. It also provided an opportunity for participants to showcase their creativity and cultural knowledge through various competitions.",
			photos: ["/dusshera/23/1.jpg", "/dusshera/23/2.jpg", "/dusshera/23/3.jpg", "/dusshera/23/4.jpg", "/dusshera/23/5.jpg", "/dusshera/23/6.jpg", "/dusshera/23/7.jpg", "/dusshera/23/8.jpg", "/dusshera/23/9.jpg", "/dusshera/23/10.jpg", "/dusshera/23/11.jpg"],
			label_photos: ["/dusshera/24/diya.svg", "/dusshera/24/diya.svg"],
			videos: ["https://youtu.be/z9jeJwqYg3g?si=X1TcOLTDYCm7VWtM"],
			matter1: "On October 17th, the Golu Doll Competition featured arranged dolls portray stories from Indian culture, while the Rangoli Competition displayed beautiful designs that reflected the beauty of the festival. On October 19th, the Telangana tradition of Bathukamma saw participants making floral arrangements representing unity. This was followed by a Garba Night, where everyone participated in traditional Garba and Dandiya dances.",
			matter2: "The venue's decorations and a photo booth added to the overall atmosphere of fun and celebration. The two-day event captured the essence of Dussehra through creative expression, cultural practices, and the joyful involvement of the community.",
			date: " "
		},
		diwali: {
			title: "DIWALI'23",
			description: "Diwali, the Festival of Lights, not only marks the triumph of light over darkness but also brings people together in a celebration of unity, joy, and cultural richness.This vibrant festival marks newbeginnings, prosperity, and the victory of hope. Celebrate Diwali by embracing its spirit of togetherness, joy, and renewal!",
			photos: ["/diwali/23/1.jpg", "/diwali/23/2.jpg", "/diwali/23/3.jpg", "/diwali/23/4.jpg", "/diwali/23/5.jpg", "/diwali/23/6.jpg", "/diwali/23/7.jpg", "/diwali/23/8.jpg", "/diwali/23/9.jpg", "/diwali/23/10.jpg"],
			label_photos: ["/dusshera/24/diya.svg", "/dusshera/24/diya.svg"],
			videos: ["https://youtu.be/lSlhUqLbawU?si=QZ15k-KJZYRB0Z20"],
			matter1: "Our Diwali event brought vibrant energy to the campus with a series of festive activities that sparked joy and togetherness. The celebrations kicked off with a Diya Painting Competition, where participants adorned clay lamps with colorful designs, symbolizing the festival’s message of light. This was followed by an Origami Event, where delicate paper lanterns were crafted, adding to the creative atmosphere. The Mehendi Competition then showcased intricate henna patterns, blending tradition with artistry.",
			matter2: "The excitement continued with a playful Limbo Challenge, as participants skillfully twisted under the bar, while the Cup-a-loon Game tested balance and added a dash of fun. Shuffle’s energetic dance performance further electrified the crowd before the evening culminated in the Lighting of Lanterns, filling the night sky with glowing lights and creating a truly magical spectacle to end the celebration.",
			date: ""
		},
		sankranti: {
			title: "SANKRANTI'23",
			description: "Makar Sankranti is more than just a seasonal festival. It is an important cultural event that promotes unity, diversity, and the richness of India’s heritage. Celebrated across the country with different names and customs, this festival marks the transition of the Sun into Capricorn symbolizing the shift towards longer days representing hope, renewal, and new beginnings.",
			photos: ["/sankranti/23/2.jpg", "/sankranti/23/3.jpg", "/sankranti/23/4.jpg", "/sankranti/23/5.jpg", "/sankranti/23/6.jpg", "/sankranti/23/7.jpg", "/sankranti/23/8.jpg", "/sankranti/23/9.jpg", "/sankranti/23/10.jpg", "/sankranti/23/11.jpg"],
			label_photos: ["/photos/tree2.png", "/photos/tree1.png"],
			videos: [""],
			matter1: "Makar Sankranthi was celebrated harmoniously by combining tradition with engaging activities. The evening began around the glowing Lohri bonfire, as students gathered to embrace the spirit of togetherness and celebration. A photobooth; crafted by the EBSB team, allowed participants to capture memorable moments against colorful backdrops.",
			matter2: "The celebration also featured captivating Shuffle and Vibes performances, alongside Kite flying and Rangoli competitions, showcasing students’ artistic talents. Friendly competition in games such as Kabaddi, Kho-Kho, and Dodgeball further enhanced the teamwork. Overall, the event celebrated cultural heritage while promoting community engagement.",
			date: ""
		},
		// ethnicnight: {
		// 	title: "ETHNIC NIGHT'23",
		// 	description: "An enchanting evening of music, dance, and art, Cultural Canvas brought the diverse beauty of our nation to life at the New Mess Lawns.",
		// 	photos: ["/ethnicNight/23/1.jpg", "/ethnicNight/23/2.jpg", "/ethnicNight/23/3.jpg", "/ethnicNight/23/4.jpg", "/ethnicNight/23/5.jpg", "/ethnicNight/23/6.jpg", "/ethnicNight/23/7.jpg", "/ethnicNight/23/8.jpg", "/ethnicNight/23/9.jpg"],
		// 	label_photos: ["/ethnicNight/23/woman.svg", "/ethnicNight/23/man.svg"],
		// 	videos: [""],
		// 	matter1: "With captivating performances of classical dances, regional poetry, and soulful music, the event dazzled and united the community. Engaging games like ring toss and the Saree Draping Challenge added fun and excitement, while a grand ramp walk showcased traditional wear in all its glory.",
		// 	matter2: "The night ended on a high with a screening of ‘RRR,’ drawing over 500 attendees. EBSB members created buzz through creative PR activities, including rose invitations and a vibrant photo booth, leaving everyone with cherished memories of a night celebrating unity in diversity.",
		// 	date: " "
		// },
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
			<WhiteButton text="Explore More" />
		</div>
	);
}


/* Data for past events
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
 */
