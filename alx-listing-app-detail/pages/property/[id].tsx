import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <PropertyDetail property={property} />
        <ReviewSection reviews={property.reviews} />
      </div>
      <div className="md:w-1/3">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}