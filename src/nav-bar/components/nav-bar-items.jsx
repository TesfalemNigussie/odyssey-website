import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const NavBarItem = (props) => {
  return (
    <li>
      <div
        onClick={props.onClick}
        className="font-satoshi text-base font-medium leading-7 tracking-normal text-left text-white mx-5"
        aria-current="page"
      >
        {props.text}
      </div>
    </li>
  );
};
