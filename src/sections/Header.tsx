"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { useEffect, useState } from "react";

export const handleClick = ({ value }: { value: string }) => {
  
  const id = document.getElementById(value);
  if (id) {
    id.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed size-10 bg-gray-800 text-white flex items-center justify-center rounded-lg bottom-10 right-10 transition-opacity duration-300 z-50 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowDown
          className="size-6 rotate-180"
          onClick={() => handleClick({ value: "home" })}
        />
      </div>
      <div className="flex justify-center items-center fixed top-3 w-full z-30">
        <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
          <button
            onClick={() => handleClick({ value: "home" })}
            className="nav-item"
          >
            Home
          </button>
          <button
            onClick={() => handleClick({ value: "project" })}
            className="nav-item"
          >
            Projects
          </button>
          <button
            onClick={() => handleClick({ value: "about" })}
            className="nav-item"
          >
            About
          </button>
          <button
            onClick={() => handleClick({ value: "contact" })}
            className="nav-item bg-white text text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
};
