import { useState } from "react";

export function DropdownHoverButton({ handleSpeed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState("1x");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSpeedSelection = (speed) => {
    const speedWithoutX = speed.replace("x", "");
    handleSpeed(+speedWithoutX);
    setSelectedSpeed(speed);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      <button
        id="dropdownHoverButton"
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="button"
        className="inline-flex items-center"
      >
        Playback Speed: {selectedSpeed}
        <svg
          className="w-2 h-2 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownHover"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36"
        >
          <ul
            className="py-1 text-sm text-gray-700"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <button
                onClick={() => handleSpeedSelection("1x")}
                className="block px-3 py-1 hover:bg-gray-100 w-full text-left text-xs"
              >
                1x
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSpeedSelection("1.5x")}
                className="block px-3 py-1 hover:bg-gray-100 w-full text-left text-xs"
              >
                1.5x
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSpeedSelection("2x")}
                className="block px-3 py-1 hover:bg-gray-100 w-full text-left text-xs"
              >
                2x
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
