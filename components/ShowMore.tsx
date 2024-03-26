"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type showMoreProps = {
  pageNumber: number;
  isNext: boolean;
};

const showMore = ({ pageNumber, isNext }: showMoreProps) => {
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  const handlelimit = () => {
    const newLimit = (pageNumber + 1) * 10;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", `${newLimit}`);

    const path = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(path, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <button
          className="custom-btn bg-primary-blue text-white rounded-full"
          onClick={() => {
            setLimit(limit + 10);
            handlelimit();
          }}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default showMore;
