import { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="w-full relative">
      <div className="bg-acorn-theme-gold md:px-28 sm:px-10 px-4">
        <div className="py-3 flex justify-between text-white"> 
          <div className="sm:block hidden">
            <ul className="flex">
              <li className="mr-2 text-lg">
                <Link href="/">
                  <FiFacebook />
                </Link>
              </li>
              <li className="mr-2 text-xl">
                <Link href="/">
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="mr-2 text-xl">
                <Link href="/">
                  <AiOutlineInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex sm:text-base text-sm">
              <li className="mr-3 flex">
                <button
                  type="button"
                  className="flex content-center items-center"
                >
                  <BsTelephoneInbound className="mr-1.5 xs:block hidden" />
                  +254721549507
                </button>
              </li>
              <li className="xs-auth:mr-3 mr-1.5 xs-auth:flex hidden">
                <button
                  type="button"
                  className="flex content-center items-center"
                >
                  <BsTelephoneInbound className="mr-1.5 " />
                  +254792922378
                </button>
              </li>

              <li className="ml-3">
                <button
                  type="button"
                  className="flex content-center items-center"
                >
                  <AiOutlineMail className="mr-1.5" />
                  info.acornnetworks@gmail.com
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="xl:px-28 px-5  py-4 flex justify-between">
        <div className="flex items-center content-center">
          <Link href="/">
            <a className="md:text-4xl text-2xl  font-bold text-acorn-theme-blue">
              Acorn Networks
            </a>
          </Link>
        </div>
        <div className="sm:flex hidden items-center content-center">
          <ul className="flex justify-around items-center font-semibold">
            <li className="md:mr-6 mr-3.5 px-4 md:rounded-3xl rounded-xl md:py-2 py-1 border-solid border-2 hover:bg-acorn-theme-blue hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="md:mr-6 mr-3.5 px-4 md:rounded-3xl rounded-xl md:py-2 py-1 border-solid border-2 hover:bg-acorn-theme-blue hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">Services</Link>
            </li>
            <li className="md:mr-6 mr-3.5 px-4 md:rounded-3xl rounded-xl md:py-2 py-1 border-solid border-2 hover:bg-acorn-theme-blue hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">CCTV</Link>
            </li>
            <li className="px-4 md:rounded-3xl rounded-xl md:py-2 py-1 border-solid border-2 hover:bg-acorn-theme-blue hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button
            className="rounded-md bg-acorn-theme-blue p-2"
            type="button"
            onClick={() => setMenu(!menu)}
          >
            <AiOutlineMenu className="text-white text-2xl" />
          </button>
        </div>
      </div>
      <div
        className={
          !menu
            ? `hidden -top-full -right-full z-1010 bg-acorn-theme-blue bg-gradient-to-r from-acorn-theme-blue to-blue-500 bg-opacity-90 p-4 transition-all duration-300`
            : `bg-acorn-theme-blue bg-opacity-90 w-screen h-screen fixed p-4 bg-gradient-to-r from-acorn-theme-blue to-blue-500 top-0 right-0 z-1010 transition-all duration-300`
        }
      >
        <div className="relative p-3 pt-0">
          <div
            className={
              menu ? `w-80 flex justify-between items-center mb-4` : `w-0`
            }
          >
            <div>
              <Link href="/">
                <a className="font-bold text-xl text-acorn-theme-gold">
                  Acorn Networks Limited
                </a>
              </Link>
            </div>
            <div className="">
              <button
                className="rounded-md bg-acorn-theme-gold p-2"
                type="button"
                onClick={() => setMenu(!menu)}
              >
                <GrClose className="text-white text-xl" />
              </button>
            </div>
          </div>
          <ul
            className={
              menu
                ? `flex flex-col justify-around items-start w-80 font-semibold`
                : `w-0`
            }
          >
            <li className="py-2.5 rounded-md shadow-md pl-2 w-full mb-2 bg-acorn-theme-gold hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2.5 rounded-md shadow-md pl-2 w-full mb-2 bg-acorn-theme-gold hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">Services</Link>
            </li>
            <li className="py-2.5 rounded-md shadow-md pl-2 w-full mb-2 bg-acorn-theme-gold hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">CCTV</Link>
            </li>
            <li className="py-2.5 rounded-md shadow-md pl-2 w-full mb-2 bg-acorn-theme-gold hover:text-white hover:shadow-md hover:transition-all hover:duration-300">
              <Link href="/">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
