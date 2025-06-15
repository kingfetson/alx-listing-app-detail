import React from "react";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const Listing: React.FC = () => (
  <section className="p-8 grid lg:grid-cols-4 md:grid-cols-2 gap-6 ">
    {PROPERTYLISTINGSAMPLE.map((list, index) => (
      <Card
        key={index}
        name={list.name}
        address={list.address}
        rating={list.rating}
        category={list.category}
        price={list.price}
        offers={list.offers}
        image={list.image}
        discount={list.discount}
      />
    ))}
  </section>
);

export default Listing;