import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import ShopCards from "./components/ShopCards/ShopCards";
import data from "./assets/json/eshopy.json";

export default function App() {
  //initialize a state for the user's balance
  const [solde, setSolde] = useState(1500);

  //initialize a state for the user's shopping cart
  const [cart, setCart] = useState([]);

  //state for available products in store
  const [articles, setArticles] = useState(data.articles);

  // function to handle purchases of products
  const handleBuy = (article) => {
    // converting product's price and stock to numbers for calculations
    const priceAsNumber = parseFloat(article.price.replace("US$", ""));
    const stockAsNumber = parseInt(article.stock, 10);

    //check if the user has enough money and products are in stock
    if (solde >= priceAsNumber && stockAsNumber > 0) {
      // Updating the user's balance after the purchase
      setSolde(solde - priceAsNumber);

      //Updating the cart with the purchases products
      setCart((element) => {
        // Searching for the product in the cart to increase its quantity
        const cartIndex = element.findIndex(
          (item) => item.name === article.name
        );
        if (cartIndex !== -1) {
          return element.map((item, index) =>
            index === cartIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // Adding the product to the cart if it's not already there
          return [...element, { ...article, quantity: 1 }];
        }
      });
      // Updating the stock of the product in the shop
      setArticles(
        articles.map((element) =>
          element.name === article.name
            ? { ...element, stock: stockAsNumber - 1 }
            : element
        )
      );
    }
  };
  // Function to remove a product from the cart
  const handleRemove = (index) => {
    setCart((element) => element.filter((item, i) => i !== index));
  };

  // Function to restore the stock of a product
  const restoreStock = (articleName) => {
    setArticles((articlePresent) =>
      articlePresent.map((article) => {
        if (article.name === articleName) {
          return { ...article, stock: article.stock + 1 };
        }
        return article;
      })
    );
  };

  return (
    <section>
      <div>
        {/* Navigation bar with the cart, balance, and management functions */}
        <Navbar
          cart={cart}
          solde={solde}
          newSolde={setSolde}
          onRemove={handleRemove}
          restoreStock={restoreStock}
        />
      </div>
      <div className="md:hidden">
        {/* Search bar for mobile version */}
        <SearchBar />
      </div>
      <div className="flex justify-center">
        {/* Product cards with the function to purchase a product */}
        <ShopCards articles={articles} onBuy={handleBuy} solde={solde} />
      </div>
    </section>
  );
}
