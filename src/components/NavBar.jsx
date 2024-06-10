import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navlinks = [
  { name: "Home", href: "#home" },
  { name: "Scoreboard", href: "#" },
  { name: "Challenges", href: "#" },
  { name: "Notifications", href: "#" },
  { name: "Register / Login", href: "#" },
];

function NavBar() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const sidenavRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClickOutside = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
      setSideNavIsOpen(false);
    }
  };

  const handleNavClick = () => {
    if (sideNavIsOpen) {
      setSideNavIsOpen(false);
    }
  };

  const listItems = navlinks.map((el, idx) => (
    <li className="p-4 navlink transition ease-in-out delay-100" key={idx}>
      <a href={el.href} onClick={handleNavClick}>
        {el.name}
      </a>
    </li>
  ));

  useEffect(() => {
    const handleResize = () => {
      if (sideNavIsOpen && windowWidth > 768) {
        setSideNavIsOpen(false);
      }
      setWindowWidth(window.innerWidth);
    };

    if (sideNavIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [sideNavIsOpen, windowWidth]);

  const handleNav = () => {
    setSideNavIsOpen(!sideNavIsOpen);
  };

  return (
    <div className="text-white flex justify-between items-center h-20 max-w-[1200px] mx-auto px-4 z-30">
      <div></div>
      <ul className="hidden md:flex">{listItems}</ul>
      <div
        className="block md:hidden cursor-pointer hover:opacity-80"
        onClick={handleNav}>
        {sideNavIsOpen ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      {/* mobile menu side nav  */}
      <div
        ref={sidenavRef}
        className={
          sideNavIsOpen
            ? "fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-700 bg-gray-900 ease-in-out duration-500 md:hidden z-30"
            : "fixed left-[-100%]"
        }>
        <ul className="pt-10">{listItems}</ul>
      </div>
    </div>
  );
}

export default NavBar;
