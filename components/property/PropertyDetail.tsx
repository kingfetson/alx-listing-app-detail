import { PropertyProps } from "@/interfaces/index";
import BookingSection from "@/components/property/BookingSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {property.images.map((image, index) => (
            <img key={index} src={image} alt={property.name} className="w-full h-96 object-cover rounded-lg" />
          ))}
        </div>

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap space-x-4">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Booking Section */}
      <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;