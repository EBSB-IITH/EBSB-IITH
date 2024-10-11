import { WhiteButton } from "./Button";
export interface PastEventCardDetails {
	title: string,
	type: string,
	year: string,
	description: string
}
export function PastEventCard({ title, type, year, description }: PastEventCardDetails) {
	return (
		<div className="flex flex-col">
			<div>{title}</div>
			<div>{type}</div>
			<div>{year}</div>
			<div>{description}</div>

			<WhiteButton text="Explore More" />
		</div>
	)
}

export function PastEventCarousel() {

}
