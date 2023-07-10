import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../Assets/dashboard-icon/website-home.png";

const WebsiteNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(scrollPosition);
  // progressBar code
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      // console.log(totalScroll);
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // console.log(windowHeight);
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScroll(scroll);
    };
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  // console.log(scroll);

  return (
    <div className="fixed top-0 min-w-full drop-shadow-lg bg-[#1D232A] z-[128]">
      <progress
        className="progress progress-warning w-full"
        value={scroll}
        max="100"
      ></progress>
      <div className="navbar md:container xl:container lg:container lg:mx-auto md:mx-auto xl:mx-auto p-0 m-0">
        <div className="navbar-start">
          {/* mobile menu start */}

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-link text-black lg:hidden">
              <svg
                xmlns="http://www.w3.org/2280/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-white z-[20] max-h-max min-w-max"
            >
              <li className="border-2 text-white">
                <Link
                  to="/home"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 0 && scrollPosition <= 210
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="border-2 text-white">
                <Link
                  to="/home/#about"
                  onClick={() => {
                    window.scrollTo({ top: 211, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 211 && scrollPosition <= 909
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="border-2 text-white">
                <Link
                  to="/home/#features"
                  onClick={() => {
                    window.scrollTo({ top: 910, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 910 && scrollPosition <= 1609
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Know what we provide"
                >
                  Features
                </Link>
              </li>
              <li className="border-2 text-white">
                <Link
                  to="/home/#client-list"
                  onClick={() => {
                    window.scrollTo({ top: 1610, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 1610 && scrollPosition <= 2309
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Who use our services"
                >
                  Client List
                </Link>
              </li>
              <li className="border-2 text-white">
                <Link
                  to="/home/#pricing"
                  onClick={() => {
                    window.scrollTo({ top: 2310, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 2310 && scrollPosition <= 2510
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Contact us for any kind of information"
                >
                  Pricing
                </Link>
              </li>
              <li className="border-2 text-white">
                <Link
                  to="/blog"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="focus:text-[#FFBE15]"
                  title="Contact us for any kind of information"
                >
                  Blog
                </Link>
              </li>
              <li className="border-2 text-white">
                <Link
                  to="/home/#contact-us"
                  onClick={() => {
                    window.scrollTo({ top: 2310, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 2310 && scrollPosition <= 2510
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Contact us for any kind of information"
                >
                  Contact Us
                </Link>
              </li>
              <button className="border-2 text-white py-1 bg-[#FFBE15] font-bold hover:bg-white hover:text-[#FFBE15]">
                <Link to="/select-role">Log In</Link>
              </button>
            </ul>
          </div>
          {/* mobile menu end */}
          {/* website logo section */}
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to="/"
            className="font-bold text-xl xl:text-2xl md:navbar-end"
            title="Welcome to আমাদের Client"
          >
            <img
              className="xl:h-[50px] lg:h-[50px] h-[40px]"
              src={icon}
              alt="amader-Client"
            />
          </Link>
        </div>
        {/* pc menu start */}
        <div className="navbar-end hidden lg:flex">
          <ul className="flex md:gap-3 lg:gap-[14px] xl:gap-8">
            <li>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold
                 ${
                   scrollPosition >= 20 && scrollPosition <= 512
                     ? "text-[#FFBE15]"
                     : "text-White"
                 }`}
                title="This is Home page."
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/home/#about"
                onClick={() => {
                  window.scrollTo({ top: 513, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold
                 ${
                   scrollPosition >= 513 && scrollPosition <= 1060
                     ? "text-[#FFBE15]"
                     : "text-White"
                 }`}
                title="Know About Us."
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/home/#features"
                onClick={() => {
                  window.scrollTo({ top: 1061, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold ${
                  scrollPosition >= 1061 && scrollPosition <= 2207
                    ? "text-[#FFBE15]"
                    : "text-White"
                }`}
                title="Know what we provide."
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/home/#client-list"
                onClick={() => {
                  window.scrollTo({ top: 2208, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold ${
                  scrollPosition >= 2208 && scrollPosition <= 3024
                    ? "text-[#FFBE15]"
                    : "text-White"
                }`}
                title="Who uses our services?"
              >
                Client List
              </Link>
            </li>
            <li>
              <Link
                to="/home/#pricing"
                onClick={() => {
                  window.scrollTo({ top: 3025, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold ${
                  scrollPosition >= 3025 && scrollPosition <= 3731
                    ? "text-[#FFBE15]"
                    : "text-White"
                }`}
                title="Deal with our best price."
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold focus:text-[#FFBE15]"
                title="See our blogs."
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/home/#contact-us"
                onClick={() => {
                  window.scrollTo({ top: 4275, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-semibold ${
                  scrollPosition >= 4236 && scrollPosition <= 5035
                    ? "text-[#FFBE15]"
                    : "text-White"
                }`}
                title="Contact us for any kind of information."
              >
                Contact Us
              </Link>
            </li>
            <button className="md:text-[1rem] lg:text-[.85rem] xl:text-[17px] font-semibold bg-[#FFBE15]  hover:bg-[#FFBE15] hover:bg-opacity-60 px-3 pb-[2px] rounded text-black hover:text-white">
              <Link to="/select-role">Log In</Link>
            </button>
          </ul>
        </div>
        {/* pc menu end */}
      </div>
    </div>
  );
};

export default WebsiteNavbar;
