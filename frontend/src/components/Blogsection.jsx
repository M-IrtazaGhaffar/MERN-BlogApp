import React from "react";
import Nature from "../assets/nature.jpg"

function Blogsection() {
  return (
    <div className="flex items-center justify-center flex-col pt-10">
      <div className="p-10 text-center">
        <h1 className="text-3xl p-2 font-bold">Recent Posts by Bloggers</h1>
        <p className="text-sm">Learn and write with your own familarity</p>
      </div>
      <div className="flex flex-wrap items-start gap-10 justify-center">
        <div className="w-60 h-80 bg-red-400 rounded-md transition hover:scale-105 ease-in-out cursor-pointer drop-shadow-xl bg-cover" style={{ backgroundImage: `url(${Nature})`}}>
          <div className="text-sm text-white h-full w-full flex flex-col justify-end gap-1 p-3">
            <b>
            Title
            </b>
            <p>
              Date
            </p>
            <i>
              IrtazaGhaffar
            </i>
          </div>
        </div>
        <div className="w-60 h-80 bg-red-400 rounded-md transition hover:scale-105 ease-in-out cursor-pointer drop-shadow-xl bg-cover" style={{ backgroundImage: `url(${Nature})`}}>
          <div className="text-sm text-white h-full w-full flex flex-col justify-end gap-1 p-3">
            <b>
            Title
            </b>
            <p>
              Date
            </p>
            <i>
              IrtazaGhaffar
            </i>
          </div>
        </div>
        <div className="w-60 h-80 bg-red-400 rounded-md transition hover:scale-105 ease-in-out cursor-pointer drop-shadow-xl bg-cover" style={{ backgroundImage: `url(${Nature})`}}>
          <div className="text-sm text-white h-full w-full flex flex-col justify-end gap-1 p-3">
            <b>
            Title
            </b>
            <p>
              Date
            </p>
            <i>
              IrtazaGhaffar
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogsection;
