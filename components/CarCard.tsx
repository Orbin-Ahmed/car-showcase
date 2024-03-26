"use client";

import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CardDetails, CustomButton } from ".";
import { useState } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

type CarCardProps = {
  cars: CarProps;
};

const CarCard = ({ cars }: CarCardProps) => {
  const { year, city_mpg, make, model, transmission, drive, highway_mpg } =
    cars;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="w-full relative h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(cars, "01")}
          alt="Car Image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex relative mt-2 w-full">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              className="object-contain"
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              className="object-contain"
              alt="tire"
            />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/gas.svg"
              width={20}
              height={20}
              className="object-contain"
              alt="MPG"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            icon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
        cars={cars}
      />
    </div>
  );
};

export default CarCard;
