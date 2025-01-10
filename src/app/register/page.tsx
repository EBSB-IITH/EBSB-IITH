import { Registration } from "@/components/register/Registration";
import Image from "next/image";

export default function Page() {
	return (
		<div className="pb-32 mx-auto flex flex-col justify-center">
			<div className="h-40 w-full bg-foreground rounded-b-[3rem] mb-24"></div>
			<div className="flex flex-row justify-center">
				<div>
					<Image
						src={"ebsb-logo.png"}
						alt=""
						width={400}
						height={400} />
				</div>

				<Registration />
			</div>
		</div>
	)
}
