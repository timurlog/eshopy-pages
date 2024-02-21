import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import bape from "../../assets/image/bape-logo.png";

export default function Navbar(props) {
  // state to control visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  // Effect to toggle the menu on click
  useEffect(() => {
    const toggle = () => setShowMenu((prev) => !prev);

    // Adding an event listener to the menu toggle button
    document.getElementById("navToggle").addEventListener("click", toggle);

    return () =>
      // remove the event listener when the component unmounts
      document.getElementById("navToggle").removeEventListener("click", toggle);
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-data">
          <a href="">
            {/* Displaying the logo image */}
            <img className="nav-logo" src={bape} alt="bapelogo logo" />
            {/* Displaying the name of the shop */}
            <p className="nav-name">ESHOPY</p>
          </a>
        </div>
        <div
          className={`nav-toggle ${showMenu ? "show-icon" : ""}`}
          id="navToggle"
        >
          {/* Close icon that appears when the menu is open */}
          <i className="fa-solid fa-cart-shopping nav-burger"></i>
          <i className="fa-solid fa-xmark nav-close"></i>
        </div>

        {/* Navigation menu that shows the cart items */}
        <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="navMenu">
          <ul className="scroll flex flex-col gap-5">
            {/* Mapping through the cart items to display them */}
            {props.cart.map((item, index) => (
              <li
                key={index}
                className="h-[124px] w-full bg-[#D8DBE2] flex p-3 rounded-2xl"
              >
                <div>
                  <img
                    src={
                      new URL(`../../assets/image/${item.img}`, import.meta.url)
                        .href
                    }
                    alt={item.name}
                    className="h-[100px]"
                  />
                </div>
                <div className="calc px-4 flex flex-col justify-around">
                  <div className="flex justify-between">
                    {/* the name of cart item */}
                    <p className="font-[garuteBold] text-lg text-[#1B1B1E]">
                      {item.name}
                    </p>
                    {/* Button to remove the item from the cart */}
                    <p
                      onClick={() => {
                        // Updating the balance when an item is removed
                        props.newSolde(
                          parseInt(props.solde) +
                            parseInt(item.price.slice(3, item.price.length - 3))
                        );
                        // Reducing the quantity of the item or removing it
                        if (item.quantity > 1) {
                          item.quantity -= 1;
                        } else {
                          props.onRemove(index);
                        }
                        // Restoring the stock of the item
                        props.restoreStock(item.name, item.quantity);
                      }}
                      className="text-lg text-[#1B1B1E] active:text-[#58A4B0] cursor-pointer"
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-[garuteRegular] text-base text-[#58A4B0]">
                      {/* Displaying  quantity of the cart item */}x
                      {item.quantity}
                    </p>
                    <p className="font-[garuteRegular] text-base text-[#373F51]">
                      {/* Displaying the price of the cart item */}
                      {item.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
