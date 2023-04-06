import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomeDashboard() {
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
  var i = 0;

  return (
    <div className="fullHeight w-full overflow-y-scroll pr-20">
      <p className="text-2xl pb-10">User Profile</p>
      <div>
        <p className="p-2">General Information</p>
        <div class="relative overflow-x-auto shadow-xl sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Username
                </th>
                <td class="px-6 py-4">M-IrtazaGhaffar</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email
                </th>
                <td class="px-6 py-4">irtazaghaffar@gmail.com</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Joined
                </th>
                <td class="px-6 py-4">April 2, 2023</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Street
                </th>
                <td class="px-6 py-4">Street A.B.C.</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  City
                </th>
                <td class="px-6 py-4">Jhelum</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Country
                </th>
                <td class="px-6 py-4">Pakistan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-20">
        <p className="p-2">My Posts</p>
        <div class="relative overflow-x-auto shadow-xl sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Index
                </th>
                <th scope="col" class="px-6 py-3">
                    Article
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Options</span>
                </th>
            </tr>
        </thead>
            <tbody>
              {
                Data.map((item) => {
                  return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {
                    ++i
                  }
                </th>
                <td class="px-6 py-4">{item.index}</td>
                <td class="px-6 py-4">Nature</td>
                <td class="px-6 py-4">{item.title}</td>
                <td class="px-6 py-4">{item.time}</td>
                <td class="px-6 py-4 text-right">
                    <Link to={`/blog/${item.index}`} class="font-medium text-red-600 dark:text-red-500 hover:underline">Visit</Link>
                </td>
              </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
