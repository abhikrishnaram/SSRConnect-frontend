"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isNavbarColored, setIsNavbarColored] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setIsNavbarColored(true);
    } else {
      setIsNavbarColored(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const content = (
    <>
      <div className="lg:hidden block absolute top-0 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl sm:px-20 py-5 text-white">
          <li
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
            onClick={() => {
              setClick(false);
              if (window.location.pathname === "/")
                document
                  ?.getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              else router.push("/");
            }}
          >
            Home
          </li>
          <li
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
            onClick={() => {
              setClick(false);
              if (window.location.pathname === "/")
                document
                  ?.getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              else router.push("/#about");
            }}
          >
            About
          </li>
          <li
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
            onClick={() => {
              setClick(false);
              if (window.location.pathname === "/")
                document
                  ?.getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              else router.push("/#features");
            }}
          >
            Features
          </li>
          <li
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
            onClick={() => {
              setClick(false);
              if (window.location.pathname === "/")
                document
                  ?.getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              else router.push("/#testimonials");
            }}
          >
            Testimonials
          </li>
          <li
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
            onClick={() => {
              setClick(false);
              router.push("/blogs");
            }}
          >
            Blogs
          </li>
          <li
            className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
            onClick={() => {
              setClick(false);
              if (window.location.pathname === "/")
                document
                  ?.getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              else router.push("/#contact");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav
      className={`w-full max-w-[100vw] fixed top-0 h-10vh flex justify-between z-50 text-black lg:py-5 px-2 py-4
    ${
      isNavbarColored
        ? "bg-[rgb(0,0,0,0.3)] transition-all duration-300 ease-out shadow-md backdrop-blur-lg"
        : `${
            window.location.pathname === "/"
              ? "bg-transparent"
              : "bg-[rgb(0,0,0,0.3)]"
          }`
    }`}
    >
      <div
        className={`w-full md:mx-auto md:max-w-6xl flex items-center justify-between`}
      >
        <div className="flex items-center flex-1">
          <Image
            src={"/images/amrita-dark.png"}
            alt="Logo"
            width={150}
            height={100}
          />
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden bg-transparent">
          <div className="flex-10">
            <ul className="flex gap-8 text-[16px]">
              <li
                className="text-white hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition-all cursor-pointer"
                onClick={() => {
                  if (window.location.pathname === "/")
                    document
                      ?.getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" });
                  else router.push("/");
                }}
              >
                Home
              </li>
              <li
                className="text-white hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition-all cursor-pointer"
                onClick={() => {
                  if (window.location.pathname === "/")
                    document
                      ?.getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#about");
                }}
              >
                About
              </li>
              <li
                className="text-white hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition-all cursor-pointer"
                onClick={() => {
                  if (window.location.pathname === "/")
                    document
                      ?.getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#features");
                }}
              >
                Features
              </li>
              <li
                className="text-white hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition-all cursor-pointer"
                onClick={() => {
                  if (window.location.pathname === "/")
                    document
                      ?.getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#testimonials");
                }}
              >
                Testimonials
              </li>
              <li
                className="text-white hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition-all cursor-pointer"
                onClick={() => {
                  router.push("/blogs");
                }}
              >
                Blogs
              </li>
              <li
                className="text-white hover:text-emerald-500 hover:border-b-2 hover:border-emerald-500 transition-all cursor-pointer"
                onClick={() => {
                  if (window.location.pathname === "/")
                    document
                      ?.getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  else router.push("/#contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button
          className="block sm:hidden transtion z-50"
          onClick={handleClick}
        >
          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
