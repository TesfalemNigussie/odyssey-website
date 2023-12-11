import React, { Fragment } from "react";
import { Logo } from "../common/logo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBarItem } from "./components/nav-bar-items";
import { Home } from "../home/home";
import { Service } from "../service/service";
import { FAQ } from "../FAQ/faq";

const NAV_BAR_ITEMS = [
  {
    id: 1,
    name: "Home",
    isSelected: false,
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    isSelected: false,
    path: "/services",
  },
  {
    id: 3,

    isSelected: false,
    path: "/faq",
  },
];

export const NavBar = (props) => {
  return (
    <nav className="bg-primary border-gray-200  px-20">
      <div className=" flex flex-wrap items-center justify-between py-5">
        <div className="flex space-x-10">
          <Logo className="h-30" />
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <NavBarItem
                key="1"
                text="Home"
                isSelected={false}
                onClick={props.onHomeClick}
              />
              <NavBarItem
                key="2"
                text="Services"
                isSelected={false}
                onClick={props.onServiceClick}
              />
              <NavBarItem
                key="3"
                text="FAQ"
                isSelected={false}
                onClick={props.onfQAClick}
              />
            </ul>
          </div>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-10 ">
          <button className="w-64 h-16 p-[9px 33px] rounded-lg border border-solid border-white gap-5 text-white">
            Become a Jobber
          </button>
          <button className="font-satoshi text-base font-medium leading-7 tracking-normal text-left text-white">
            EN ▼
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
