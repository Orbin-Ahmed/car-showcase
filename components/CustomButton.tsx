"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

type CustomButtonProps = {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  icon?: string;
  isDisabled?: boolean;
};

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType = "button",
  textStyles,
  icon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && (
        <div className="relative h-6 w-6">
          <Image src={icon} alt="arrow" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
