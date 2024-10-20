export default function Card({ src, title, name }: { src: string, title: string, name: string }) {
	let toRenderTitle = true
	if (title == "") {
		toRenderTitle = false
	}
	return (
		<div className="flex flex-col text-center w-fit h-fit">

			<img data-toRenderTitle={toRenderTitle} className="rounded-2xl mb-4 data-[toRenderTitle=true]:w-[15rem] data-[toRenderTitle=true]:h-[15rem] data-[toRenderTitle=false]:w-[13rem] data-[toRenderTitle=false]:h-[13rem]" src={src} />
			<div data-toRenderTitle={toRenderTitle} className="data-[toRenderTitle=false]:hidden font-semibold text-lg">{title}</div>
			<div>{name}</div>
		</div>
	)
}
