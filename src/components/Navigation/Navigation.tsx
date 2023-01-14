import React, { useEffect } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import NavBar from "../NavBar/NavBar";
import "./Navigation.css";
import WelcomePage from "../Pages/WelcomePage";
import WhatWeDoPage from "../Pages/WhatWeDoPage";
import OurGoalPage from "../Pages/OurGoalPage";
import ContactPage from "../Pages/ContactPage";

function Nav() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-full h-full">
      {/* <NavBar /> */}
      <div className="w-full h-auto flex flex-row sticky top-0 z-10 justify-center">
        <nav className="w-full h-auto flex flex-row absolute top-0 z-50 justify-start">
          <ul className="w-3/6 flex flex-row text-white justify-between justify-items-end">
            <li>
              <Link
                activeClass="active"
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600"
                to="test1"
                spy={true}
                smooth={true}
                duration={500}
              >
                Luminocity Industry Inc
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600"
                to="test2"
                spy={true}
                smooth={true}
                duration={500}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600"
                to="test3"
                spy={true}
                smooth={true}
                duration={500}
              >
                Our Goal
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600"
                to="test4"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="absolute top-0 w-full h-full"> */}
      <Element name="test1" className="h-screen top-0 w-screen">
        <WelcomePage />
      </Element>

      <Element name="test2" className="h-screen w-screen">
        <WhatWeDoPage />
      </Element>

      <Element name="test3" className="h-screen w-screen">
        <OurGoalPage />
      </Element>
      <Element name="test4" className="h-screen w-screen">
        <ContactPage />
      </Element>
      {/* </div> */}
    </div>
  );
}

export default Nav;
