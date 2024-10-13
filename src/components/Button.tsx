export function GrayButton({ text }: { text: string }) {
	return (
		<div className="bg-foreground text-background font-bold px-6 py-2 rounded-lg w-fit">
			{text}
		</div>
	)
}
export function WhiteButton({ text }: { text: string }) {
	return (
		<div className="bg-background text-foreground px-6 py-2 font-bold rounded-lg w-fit">
			{text}
		</div>
	)
}
