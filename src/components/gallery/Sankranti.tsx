import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle";
import Image from "next/image";

export function SankrantiGallery23() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>SANKRANTI '23</div>
      <div className={innerDivStyle}>
        {[...Array(11)].map((_, index) => (
          <div key={index} className="relative lg:w-[27rem]"> {/* Adjust size as needed */}
            <Image
              alt={`Sankranti image ${index + 1}`}
              src={`/sankranti/23/${index + 1}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
