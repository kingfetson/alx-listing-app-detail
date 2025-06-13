export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  description: string;
  category: string[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  }[];
}