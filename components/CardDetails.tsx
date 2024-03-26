"use client";
import { CarProps } from "./CarCard";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

type CardDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  cars: CarProps;
};

const CardDetails = ({ cars, closeModal, isOpen }: CardDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="z-10 relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="inset-0 overflow-y-auto fixed">
            <div className="min-h-full flex items-center justify-center text-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-95"
                leaveTo="opacity-0 scale-100"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white 
                            transform p-4 rounded-2xl text-left shadow-xl transition-all flex flex-col gap-4"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    {/* Main Image */}
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(cars, "01")}
                        alt="car image"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    {/* Main Image end */}
                    {/* Other Image */}
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(cars, "29")}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(cars, "33")}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(cars, "13")}
                          alt="car image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                    {/* Other Image end */}
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {cars.make} {cars.model}
                    </h2>
                    <div className="flex flex-wrap mt-3 gap-4">
                      {Object.entries(cars).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h2 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h2>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetails;
