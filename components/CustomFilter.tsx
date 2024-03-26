"use client";

import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";

interface OptionsProps {
  title: string;
  value: string;
}

type CustomFilterProps = {
  title: string;
  options: OptionsProps[];
};

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  const router = useRouter();

  const handleSearchParams = (e: { title: string; value: string }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(title, e.value.toLowerCase());

    const path = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(path, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(event) => {
          setSelected(event);
          handleSearchParams(event);
        }}
      >
        <div className="w-fit z-10 relative">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="Arrow up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((item, index) => (
                <Listbox.Option
                  value={item}
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default py-2 px-4 select-none ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.value}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
