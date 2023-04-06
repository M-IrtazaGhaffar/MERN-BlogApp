import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <footer class="m-4">
        <div class="w-full mx-auto p-4 md:px-6 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/home"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img
                src={Logo}
                class="h-8 mr-3"
                alt="Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                HiPost
              </span>
            </Link>
            <ul class="flex flex-wrap items-center gap-7 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link to="/about" class="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/policy" class="hover:underline">
                  Private Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-red-200 sm:mx-auto dark:border-red-700 lg:my-8" />
          <span class="block text-sm text-red-500 sm:text-center dark:text-red-400">
            © {" "}
            <a href="https://flowbite.com/" class="hover:underline">
              HiPost
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
