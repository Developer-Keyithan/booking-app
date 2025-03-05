"use client"

import { useEffect, useRef } from "react";

type DropdownItem = {
    title: string;
    option?: string;
    link?: string;
};

const Dropdown = ({
  details,
  onSelect,
  setIsOpen,
}: {
  details: DropdownItem[];
  onSelect?: (option: string) => void;
  setIsOpen: (state: boolean) => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div ref={dropdownRef} className="absolute top-full right-0 mt-4 p-2 space-y-1 min-w-40 rounded-md shadow-lg ring-1 ring-gray-200 bg-white">
      {details.map((data) =>
        data.link ? (
          <a
            key={data.title}
            href={data.link}
            className="block py-2 px-4 hover:bg-blue-100 rounded-md"
          >
            {data.title}
          </a>
        ) : (
          <div
            key={data.title}
            className="block py-2 px-4 cursor-pointer hover:bg-blue-100 rounded-md"
            onClick={() => onSelect?.(data.option ?? "")}
          >
            {data.title}
          </div>
        )
      )}
    </div>
  );
};

export default Dropdown;
