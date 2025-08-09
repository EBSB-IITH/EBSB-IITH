import { useEffect, useRef } from "react";
import { headingStyle, innerDivStyle, outerDivStyle } from "./eventGalleryStyle";
import Image from "next/image";

export function DiwaliGallery23() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>DIWALI '23</div>
        <div className={`${innerDivStyle} animate-wiggle`}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="relative"> {/* Adjust size as needed */}
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

export function DiwaliGallery24() {
  return (
    <div className={outerDivStyle}>
      <div className={headingStyle}>DIWALI '24</div>
        <div className={`${innerDivStyle} animate-gallery-scroll`}>
        {[...Array(29)].map((_, index) => (
          <div key={index} className="relative"> {/* Adjust size as needed */}
            <Image
              alt={`Diwali image ${index + 1}`}
              src={`/diwali/24/${index + 1}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
