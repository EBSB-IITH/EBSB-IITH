import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle";
import Image from "next/image";

export function DiwaliGallery23() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>DIWALI '23</div>
      <div className={innerDivStyle}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="relative lg:w-[27rem]"> {/* Adjust size as needed */}
            <Image
              alt={`Diwali image ${index + 1}`}
              src={`/diwali/23/${index + 1}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
