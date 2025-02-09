export default function Card({ src, title, name }: { src: string, title: string, name: string }) {
	let torendertitle = true
	if (title == "") {
		torendertitle = false
	}
	return (
		<div className="flex flex-col text-center w-min lg:w-fit h-fit">

			<img data-torendertitle={torendertitle} className="rounded-2xl mb-4 data-[torendertitle=true]:min-w-[11rem] lg:data-[torendertitle=true]:w-[15rem] data-[torendertitle=true]:h-[11rem] lg:data-[torendertitle=true]:h-[15rem] data-[torendertitle=false]:min-w-[7rem]  lg:data-[torendertitle=false]:min-w-[13rem] data-[torendertitle=false]:h-[7rem] lg:data-[torendertitle=false]:h-[13rem] object-cover" src={src} />
			<div data-torendertitle={torendertitle} className="data-[torendertitle=false]:hidden font-semibold text-lg">{title}</div>
			<div className="text-wrap leading-snug">{name}</div>
		</div>
	)
}
