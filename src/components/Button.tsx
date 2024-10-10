export function GrayButton({ text }: { text: string }) {
	return (
		<div className="bg-customGray px-6 py-2 rounded-lg ">
			{text}
		</div>
	)
}
export function WhiteButton({ text }: { text: string }) {
	return (
		<div className="bg-white px-6 py-2 rounded-lg">
			{text}
		</div>
	)
}
