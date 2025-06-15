import React from "react";
import Image from "next/image";
import { BACKGROUND_IMAGE } from "@/constants";

const Hero: React.FC = () => {
  return (
    <section className="w-[95%] mx-auto relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image using next/image */}
      <Image
        src={BACKGROUND_IMAGE.heroBackgroundMobile}
        alt="Scenic background of a beautiful destination"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="z-0 rounded-full"
      />
      <Image
        src={BACKGROUND_IMAGE.heroBackgroundDesktop}
        alt="Scenic background of a beautiful destination"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="z-0 rounded-4xl lg:block"
      />
      {/* Content Overlay */}
      <div className="relative z-10 text-white p-4 bg-opacity-30 rounded-lg">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Find your favorite place here!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;