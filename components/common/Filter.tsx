import React from "react";
import Button from "./Button";
import Image from "next/image";

const Filter: React.FC = () => {
  return (
    <section className="flex justify-between gap-4 px-8 bg-white rounded-lg mt-8">
      <div className="flex items-center justify-between gap-2">
        <Button size="medium" shape="rounded-full" children="All" />
        <Button size="medium" shape="rounded-full" children="Top Villa" />
        <Button size="medium" shape="rounded-full" children="Free Reshedule" />
        <Button
          size="medium"
          shape="rounded-full"
          children="Book Now, Pay Later"
        />
        <Button size="medium" shape="rounded-full" children="Self Check in" />
        <Button size="medium" shape="rounded-full" children="Instant Booking" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button size="medium" shape="rounded-full">
          <div className="flex justify-center items-center gap-4">
            <p>Filter</p>
            <Image
              src="/assets/icons/Linear/Essentional, UI/Filter.png"
              width={20}
              height={20}
              alt="filter"
            />
          </div>
        </Button>
         <Button size="medium" shape="rounded-full">
          <div className="flex justify-center items-center gap-4">
            <p>Sort by:</p>
            <p className="text-gray-400">Highest Price</p>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Filter;