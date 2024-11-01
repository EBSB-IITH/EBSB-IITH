//import Link from "next/link";
import { useState } from "react";
//import { WhiteButton } from "../../components/Button";

export interface EventDetails {
	title: string;
	description: string;
	date: string;
	time: string;
	venue: string;
}

export default function UpcomingEventHome({ title, description, date, venue }: EventDetails) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleButtonClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-40 mt-4 sm:mt-6 md:mt-8 lg:mt-10 py-4 sm:py-6 md:py-8">
			<div className="flex flex-col max-w-3xl">
				<div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-10 leading-tight  ">
						{title}
					</h1>
					<p className="normal-text text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
						{description}
					</p>
					<div className="space-y-2 sm:space-y-3">
						<p className="normal-text text-sm sm:text-base md:text-lg">Date - {date}</p>
						<p className="normal-text text-sm sm:text-base md:text-lg">Venue - {venue}</p>
					</div>
				</div>

				<button
					className="relative sm:gap-4 mt-4 z-30 sm:mt-6 bg-background text-foreground px-6 py-2.5 font-bold rounded-lg w-fit hover:cursor-pointer"
					onClick={handleButtonClick}
				>
					VIEW SCHEDULE
				</button>

			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white p-6 lg:p-8 xl:p-10 pt-10 pr-10 rounded-lg max-w-lg lg:max-w-2xl w-full relative">
						<button
							onClick={handleCloseModal}
							className="text-foreground text-xl py-1 hover:text-gray-900 absolute top-4 right-4"
						>
							Close
						</button>
						<div className="flex overflow-x-auto space-x-8 p-2.5 scrollbar-hidden">
							<img src="/upcoming/upcoming1.jpeg" alt="Image 1" className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover" />
							<img src="/upcoming/upcoming2.jpeg" alt="Image 2" className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover" />
							<img src="/upcoming/upcoming3.jpeg" alt="Image 3" className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover" />
							<img src="/upcoming/upcoming4.jpeg" alt="Image 4" className="w-[300px] sm:w-[450px] md:w-[550px] lg:w-[750px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover" />
						</div>
					</div>
				</div>
			)}

		</div>
	);
}
