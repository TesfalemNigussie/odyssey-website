import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./nav-bar/nav-bar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { FAQ } from "./FAQ/faq";
import { Service } from "./service/service";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const fAQRef = useRef(null);

  const onHomeClick = () => {
    //homeRef.current.scrollIntoView();
  };

  const onServiceClick = () => {
    //serviceRef.current.scrollIntoView();
  };

  const onfQAClick = () => {
    //fAQRef.current.scrollIntoView();
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          onHomeClick={onHomeClick}
          onServiceClick={onServiceClick}
          onfQAClick={onfQAClick}
        />
        <Home ref={homeRef} />
        <Service ref={serviceRef} />
        <FAQ ref={fAQRef} />
      </BrowserRouter>
    </div>
  );
}

export default App;
