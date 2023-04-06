import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/nature.jpg";

function Blogs() {
  const Data = [
    {
      index: 1,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 2,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 3,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 4,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 5,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 6,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 7,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
    {
      index: 8,
      name: "M. Irtaza Ghaffar",
      title: `I'm Pakistani and also a Patriot`,
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
      time: "01-01-2023",
    },
  ];

  const [Loading, setLoading] = useState(false);
  return Loading ? (
    <div class="flex items-center justify-center" style={{ height: "85vh" }}>
      <div role="status">
        <svg
          aria-hidden="true"
          class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 pt-10">
        <h3 className="text-3xl">Recent Blogs</h3>

        <form>
          <div class="relative" style={{ width: "300px" }}>
            <button
              class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
              type="submit"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex gap-10 m-10 flex-wrap items-start justify-center">
        {Loading
          ? ""
          : Data.map((item) => {
              return (
                <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:bg-gray-100 transition ease-in-out">
                  <img class="rounded-t-lg" src={Image} alt="" />
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.desc}
                    </p>
                    <Link
                      to={`/blog/${item.index}`}
                      key={item.index}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Blogs;
