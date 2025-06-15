import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col text-gray-400">
      <div className="bg-emerald-600 p-5"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-[#222222]">
        <div className="flex flex-col w-full lg:w-[90%]">
          <Image
            src="/assets/logos/alx logo-2.png"
            width={80}
            height={80}
            alt="alx logo"
          />
          <p className="my-6">
            Alx is a platform where traveler can discover and book unique,
            conformtable and affordable lodging options worldwide. From cozy
            city apartment and tranquil countryside retreat to exotic beachside
            vila, Alx connect you with a perfect place to stay for your trip.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:grid-cols-3 w-full mt-6 p-4">
          <div>
            <p className="font-semibold text-2xl">Explore</p>
            <ul className="mt-6 space-y-4 text-sm font-semibold">
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Apartment in Dubai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Hotel in New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Apartment in Dubai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Villa in Spain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Mansion in Indonesia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-2xl">Company</p>
            <ul className="mt-6 space-y-2 text-sm font-semibold">
              <li>
                <a href="#" className="hover:text-emerald-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Brand
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-2xl">Help</p>
            <ul className="mt-6 space-y-2 text-sm font-semibold">
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Cancel Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">
                  Refund Process
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#222222]">
        <hr className="border-gray-600"/>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-[#222222] py-8 px-4">
        <p className="text-center lg:text-left">
          Some Hotels requires you to cancel more than 24 hours before check-in.
          Details{" "}
          <a href="#" className="text-emerald-600">
            here
          </a>
        </p>
        <ul className="flex justify-between w-[90%] md:w-[45%] lg:w-[35%] py-8 text-sm font-semibold">
          <li>
            <a href="#" className="hover:text-emerald-500">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-500">
              Policy Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-500">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;