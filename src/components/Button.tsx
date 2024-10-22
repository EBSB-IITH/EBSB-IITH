export function GrayButton({ text }: { text: string }) {
	return (
		<div className="relative bg-foreground text-background font-bold px-6 py-3 lg:py-2 rounded-lg w-fit z-10">
			{text}
		</div>
	)
}
export function WhiteButton({ text }: { text: string }) {
	return (
		<div className="relative bg-background text-foreground px-6 py-3 lg:py-2 font-bold rounded-lg w-fit z-10">
			{text}
		</div>
	)
}
