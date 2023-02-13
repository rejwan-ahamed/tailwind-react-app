import React, { useState } from "react";
import Links from "../Links/Links";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const routs = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blogs", path: "/blogs" },
    { id: 5, name: "Products", path: "/products" },
  ];
  return (
    <div>
      <div className="navIcon w-6 h-6 md:hidden text-black cursor-pointer relative z-20" onClick={() => setOpen(!open)}>
        {open ? <Bars2Icon/> : <XMarkIcon/>}
      </div>
      <nav className="overflow-x-hidden overflow-y-hidden">
        <ul className={`md:flex justify-center md:static absolute z-10 bg-orange-500 h-screen w-full md:h-auto overflow-x-hidden top-[-1%] duration-500 ease-in-out ${open ?'right-[100%]': 'right-0'}`}>
          {routs.map((rout) => (
            <Links key={rout.id} routs={rout} ></Links>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
