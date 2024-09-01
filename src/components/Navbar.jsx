import { useState } from "react";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
  navVariants,
} from "../utils/motion.js";

import { close, menu, akun } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Index");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full flex py-6 justify-between items-center navbar "
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.5, 0.9)}
        initial="hidden"
        animate="show"
        className="font-poppins font-semibold ss:text-[21px] text-[22px] text-white ss:leading-[100.8px] leading-[35px] z-[20]"
      >
        Mochrks
      </motion.p>

      {/* navbar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[999]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" flex-row-reverse justify-end items-center">
        <img
          src={akun}
          alt="akun"
          className="sm:ml-10  object-contain relative cursor-pointer"
        />
      </div>

      {/* toogle menu*/}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        {/* menu bar icons */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-[5]"
          onClick={() => setToggle(!toggle)}
        />

        {/* menu bar in mobile*/}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-10" : "mb-6"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
