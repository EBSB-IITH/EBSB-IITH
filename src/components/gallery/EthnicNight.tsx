import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle";
import Image from "next/image";

export function EthnicNightGallery23() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>ETHNIC NIGHT '23</div>
      <div className={innerDivStyle}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className="relative lg:w-[27rem]"> {/* Adjust size as needed */}
            <Image
              alt={`Ethnic Night image ${index + 1}`}
              src={`/ethnicNight/23/${index + 1}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
