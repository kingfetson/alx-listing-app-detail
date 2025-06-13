import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalPayment, setTotalPayment] = useState(0);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(e.target.value);
    calculateTotalPayment(e.target.value, checkOutDate);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(e.target.value);
    calculateTotalPayment(checkInDate, e.target.value);
  };

  const calculateTotalPayment = (checkIn: string, checkOut: string) => {
    if (checkIn && checkOut) {
      const checkInDateObj = new Date(checkIn);
      const checkOutDateObj = new Date(checkOut);
      const nights = (checkOutDateObj.getTime() - checkInDateObj.getTime()) / (1000 * 3600 * 24);
      setTotalPayment(nights > 0 ? nights * price : 0);
    } else {
      setTotalPayment(0);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          value={checkInDate}
          onChange={handleCheckInChange}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={handleCheckOutChange}
          className="border p-2 w-full mt-2"
        />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${totalPayment}</strong></p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;