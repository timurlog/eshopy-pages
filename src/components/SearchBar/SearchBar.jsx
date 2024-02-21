import React from "react";

export default function SearchBar() {
  return (
    <section className="flex justify-between items-center py-10 px-7">
      <div className="h-12 border-[#A9BCD0] border-[2px] rounded-3xl flex justify-center items-center p-3 gap-2">
        <i className="fa-solid fa-magnifying-glass text-[1.5rem] text-[#373F51] cursor-pointer"></i>
        <input
          className="bg-white border-none outline-none w-[240px] text-[#1B1B1E]"
          type="text"
          name="search"
          id="search"
        />
      </div>
      <div>
        <i className="fa-solid fa-filter text-[1.5rem] text-[#373F51] cursor-pointer"></i>
      </div>
    </section>
  );
}
