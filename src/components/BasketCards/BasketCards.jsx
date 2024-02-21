import React from "react";
import "./BasketCards.css";
import img from "../../assets/image/bape-11.jpg";

export default function BasketCards() {
  return (
    <section className="h-[124px] w-full bg-[#D8DBE2] flex p-3 rounded-2xl">
      <div>
        <img className="h-[100px]" src={img} alt="" />
      </div>
      <div className="calc px-4 flex flex-col justify-around">
        <div className="flex justify-between">
          <p className="font-[garuteBold] text-lg text-[#1B1B1E]">Title</p>
          <p className="text-lg text-[#1B1B1E] cursor-pointer">
            <i class="fa-solid fa-xmark"></i>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-[garuteRegular] text-base text-[#58A4B0]">1x</p>
          <p className="font-[garuteRegular] text-base text-[#373F51]">747</p>
        </div>
      </div>
    </section>
  );
}
