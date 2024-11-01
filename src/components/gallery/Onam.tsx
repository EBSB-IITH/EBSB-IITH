import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle";
import Image from "next/image";

export function OnamGallery24() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>ONAM '24</div>
      <div className={innerDivStyle}>
        {[...Array(12)].map((_, index) => (
          <div key={index} className=" relative"> {/* Adjust size as needed */}
            <Image
              alt={`Onam image ${index + 1}`}
              src={`/onam/24/${index + 1}.jpg`}
              layout="fill" 
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
