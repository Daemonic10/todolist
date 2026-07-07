import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-black p-4 m-10 rounded-2xl items-center gap-5">
      <div className="Kiri flex flex-row gap-5 justify-center items-center">
        <div className="">
          <p className="logo text-white font-bold text-xl">DaeList</p>
        </div>
        <div className="search">
          <input
            className="text-white outline-1 rounded-2xl"
            placeholder="    Search"
            type="text"
          />
        </div>
      </div>

      <div className="Kanan">
        <div className="">
          <p className="NamaOrang text-2xl text-white">Daemon</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
