import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center gap-7 flex-col">
        <h1 className="text-center text-red-700 text-5xl p-10 capitalize Luckiest">
          The freedom to create
          <br />
          your imagination
        </h1>
        <div className="border border-black-100 rounded-md px-5 py-1">
          <p>Do all according to your type</p>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap px-5">
          <Link className="bg-red-600 text-white p-2 w-20 text-center rounded-lg hover:scale-110 transition ease-in-out">Tech</Link>
          <Link className="bg-red-600 text-white p-2 w-20 text-center rounded-lg hover:scale-110 transition ease-in-out">Nature</Link>
          <Link className="bg-red-600 text-white p-2 w-20 text-center rounded-lg hover:scale-110 transition ease-in-out">Beauty</Link>
          <Link className="bg-red-600 text-white p-2 w-20 text-center rounded-lg hover:scale-110 transition ease-in-out">Politics</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
