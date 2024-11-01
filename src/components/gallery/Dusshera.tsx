import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle";
import Image from "next/image";

export function DussheraGallery23() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>DUSSHERA '23</div>
      <div className={innerDivStyle}>
        {[...Array(11)].map((_, index) => (
          <div key={index} className="relative lg:w-[27rem]"> {/* Adjust size as needed */}
            <Image
              alt={`Dusshera image ${index + 1}`}
              src={`/dusshera/23/${index + 1}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
