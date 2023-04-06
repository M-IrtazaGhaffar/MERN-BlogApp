import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Register() {
  return (
    <div>
      <div className="font-sans flex h-screen items-center justify-center p-7">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-30 w-auto" src={Logo} alt="HiPost" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register a new account
            </h2>
            <p className="text-center p-1">
              Please provide your information below
            </p>
            <Link
              to="/user/login"
              className="text-red-600 text-center text-xs block pt-2"
            >
              Already Registered?
            </Link>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="p-5 relative block w-full rounded-t-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="p-5 relative block w-full border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  name="cpassword"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="p-5 relative block w-full border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
              <input
                  name="street"
                  type="text"
                  autocomplete="current-password"
                  required
                  className="p-5 relative block w-full border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  name="street"
                  type="text"
                  autocomplete="current-password"
                  required
                  className="p-5 relative block w-full border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Street"
                />
              </div>
              <div>
                <input
                  name="city"
                  type="text"
                  autocomplete="current-password"
                  required
                  className="p-5 relative block w-full border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="City"
                />
              </div>
              <div>
                <input
                  name="country"
                  type="text"
                  autocomplete="current-password"
                  required
                  className="p-5 relative block w-full rounded-b-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Country"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-red-400 py-2 px-3 text-sm font-semibold text-white hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-red-600 group-hover:text-red-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
