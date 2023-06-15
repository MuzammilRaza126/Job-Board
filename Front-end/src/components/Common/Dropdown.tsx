import Link from 'next/link';
import React, { useState } from 'react';

interface Option {
  label: string;
  link: string;
  isActive: boolean;
}

interface OptionsDropdownProps {
  options: Option[];
}

const OptionsDropdown: React.FC<OptionsDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm outline-none font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Actions
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option, index) => (
            <Link
              href={option.link}
              className={`text-gray-700 block px-4 py-2 text-sm  ${!option.isActive && 'hidden'}`}
              role="menuitem"
              tabIndex={-1}
              key={index}
            //   onClick={() => handleOptionClick(option.link)}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
