import React from "react";
import "./css/home.css";
import bannerImg from "../media/banner.jpg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";
import menu from "../media/svg/menu.svg";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      className="relative w-full"
      style={{ background: `url(${bannerImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <div className="backdrop-blur-sm backdrop-brightness-50 backdrop-saturate-200">
        <nav className="z-20">
          <div className="banner">
            <div className="flex justify-between bg-transparent items-center max-sm:px-7 max-sm:py-2 px-10 py-4">
              <div className="max-sm:w-24" >
                <img src={logo} className="logo rounded-md shadow-sm" />
              </div>
              <ul className="max-lg:hidden font-semibold text-white flex justify-center items-center">
                <li>
                  <Link className="" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="" to="/courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link className="" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className="" to="/about">
                    About us
                  </Link>
                </li>
              </ul>
              <div className="max-lg:block hidden">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center rounded-md p-0 text-sm font-semibold text-gray-900 shadow-sm">
                      <svg viewBox="0,0,256,256" className="max-sm:w-10 w-20 p-0">
                        <g
                          fill="#ffffff"
                          fill-rule="nonzero"
                          stroke="none"
                          stroke-width="1"
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          style={{ mixBlendMode: "normal" }}
                        >
                          <g transform="scale(3.55556,3.55556)">
                            <path d="M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z"></path>
                          </g>
                        </g>
                      </svg>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 z-40">
                        <ul className="flex flex-col" >
                          <li>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Home
                                </Link>
                              )}
                            </Menu.Item>
                          </li>
                          <li>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/courses"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Courses
                                </Link>
                              )}
                            </Menu.Item>
                          </li>
                          <li>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/about"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  About Us
                                </Link>
                              )}
                            </Menu.Item>
                          </li>
                          <li>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/contact"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Contact Us
                                </Link>
                              )}
                            </Menu.Item>
                          </li>
                        </ul>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
        <div className="absolute  my-auto top-56 left-0 right-0 mx-auto flex flex-col justify-center items-center">
          <div className=" flex justify-center items-center text-5xl max-lg:text-3xl max-sm:text-xl my-8 text-white slide-right">
            <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
              <strong>
                LEARN TECHNOLOGY WITH
                <br /> INDUSTRY EXPERT
              </strong>
            </h1>
          </div>
          <Link
            to="/courses"
            style={{ backgroundColor: "#FF8D0A" }}
            className="font-bold py-3 px-6 rounded-3xl"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
