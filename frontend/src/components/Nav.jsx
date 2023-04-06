import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

function Nav() {
  const [Open, setOpen] = useState(false);
  const location = useLocation();
  const [Login, setLogin] = useState(true);
  let email = 'irtazaghaffar@gmail.com'
  return (
    <div>
      <nav class="bg-white border-gray-200 py-2.5 rounded dark:bg-gray-900 mobile:px-0">
        <div class="flex flex-wrap items-center justify-between mx-auto px-5">
          <Link to="/home" class="flex items-center">
            <img src={Logo} class="h-6 mr-3 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              HiPost
            </span>
          </Link>

          <div class="flex items-center md:order-2 gap-2">
            <button>
              {Login ? (
                <Link to='/user/dashboard'>
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    {
                      email[0].toUpperCase() + email[1].toUpperCase()
                    }
                  </span>
                </div>
                </Link>
              ) : (
                <Link
                  to="/user/login"
                  className="bg-red-500 text-white px-4 py-2 rounded-md drop-shadow-md hover:bg-red-600"
                >
                  Sign in
                </Link>
              )}
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setOpen(!Open)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            class={`${
              Open ? "" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-2"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home"
                  className={`block py-2 pl-3 pr-4 text-black rounded md:bg-transparent ${
                    location.pathname === "/home"
                      ? "md:text-red-700 bg-red-700 text-white"
                      : "md:text-black bg-gray-50"
                  } md:p-0 dark:text-white`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className={`block py-2 pl-3 pr-4 text-black rounded md:bg-transparent ${
                    location.pathname === "/blogs"
                      ? "md:text-red-700 bg-red-700 text-white"
                      : "md:text-black"
                  } md:p-0 dark:text-white`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 pl-3 pr-4 text-black rounded md:bg-transparent ${
                    location.pathname === "/contact"
                      ? "md:text-red-700 bg-red-700 text-white"
                      : "md:text-black"
                  } md:p-0 dark:text-white`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
