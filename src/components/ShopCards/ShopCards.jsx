import React from "react";
import Cards from "../Cards/Cards";
import data from "../../assets/json/eshopy.json";

export default function ShopCards(props) {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[85%] flex flex-col items-start p-10 pb-5">
        <p className="font-[garuteBold] text-[#1B1B1E] text-4xl">Articles</p>
        <p className="font-[garuteRegular] text-[#A9BCD0] text-base">
          Solde : ${props.solde}
        </p>
      </div>
      {/* Container for the Cards components */}
      <div className="CardsContainer flex flex-wrap w-[85%] gap-16 justify-center p-10">
        {props.articles.map((element, index) => (
          // Passing the name, price, stock, and image of each article
          <Cards
            key={index}
            name={element.name}
            price={element.price}
            stock={element.stock}
            images={element.img}
            onBuy={() => props.onBuy(element)} // Handling the buy action for each article
            solde={props.solde}
          />
        ))}
      </div>
    </section>
  );
}
