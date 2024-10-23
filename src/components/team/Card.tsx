export default function Card({ src, title, name }: { src: string, title: string, name: string }) {
	let toRenderTitle = true
	if (title == "") {
		toRenderTitle = false
	}
	return (
		<div className="flex flex-col text-center w-min lg:w-fit h-fit">

			<img data-toRenderTitle={toRenderTitle} className="rounded-2xl mb-4 data-[toRenderTitle=true]:min-w-[11rem] lg:data-[toRenderTitle=true]:w-[15rem] data-[toRenderTitle=true]:h-[11rem] lg:data-[toRenderTitle=true]:h-[15rem] data-[toRenderTitle=false]:min-w-[7rem]  lg:data-[toRenderTitle=false]:min-w-[13rem] data-[toRenderTitle=false]:h-[7rem] lg:data-[toRenderTitle=false]:h-[13rem]" src={src} />
			<div data-toRenderTitle={toRenderTitle} className="data-[toRenderTitle=false]:hidden font-semibold text-lg">{title}</div>
			<div className="text-wrap leading-snug">{name}</div>
		</div>
	)
}
