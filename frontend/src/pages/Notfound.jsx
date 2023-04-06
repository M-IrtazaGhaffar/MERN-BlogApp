import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <main class="flex items-center justify-center h-screen ">
        <div class="text-center">
          <p class="text-base font-semibold text-red-400">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600 px-10">
            Sorry, we couldn't find the page you're looking for!
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/home"
              class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/contact" class="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Notfound;
