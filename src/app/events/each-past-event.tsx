import { WhiteButton } from "@/components/Button";
export interface PastEvent {
	title: string,
	type: string,
	year: string,
	description: string,
	matter: string
}
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
