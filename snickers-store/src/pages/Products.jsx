import "./Items.css"
import Nav from "../components/Nav.jsx"
import shoesData from "../data/shoesData.js"
import ItemsBox from "../components/ItemsBox.jsx"
import Sidebar from "../components/Sidebar.jsx"
import { useEffect, useState } from "react"
import Info from "../components/Info.jsx"
import Cart from "../components/Cart.jsx"
const Items = () => {
  //Add to cart
  const [cartItems, setCartItems] = useState([]);
  const handleAddItem = (id) => {
    const item = shoesData.find(item => item.id === id);
    setCartItems([...cartItems, item]);
  }

  // remove an item from cart 
  const removeItem = (id) => {
    const filteredItems = cartItems.filter(item => item.id !== id);
    setCartItems([...filteredItems])
  }

  // Show cart 
  const [displayCart, setDisplayCart] = useState(false);
  const toggleCartDisplay = () => {
    setDisplayCart(!displayCart);
  }
  // Pop up
  const [showInfo, setShowInfo] = useState();
  const test = (id) => {
    setShowInfo(id);
  }

  const itemInfo = shoesData.find((item) => item.id === showInfo);
  // search bar
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  // Code for searching a product
  const filterByQuery = shoesData.filter(item => item.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);
  const filteredByQuery = filterByQuery.map((item) => {
    return (
      <ItemsBox
        id={item.id}
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    );
  });
  // To manage the item that will be displayed
  const [display, setDisplay] = useState("");
  const manageDisplay = (e) => {
    setDisplay(e.target.value);
  }
  // To disply the items that is below 200
  const below200 = shoesData.filter(item => item.price < 200);
  const displayBelow200 = below200.map(item => {
    return (
      <ItemsBox
        id={item.id}
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    );
  })
  // To display the items that is below 200
  const above200 = shoesData.filter(item => item.price > 200);
  const displayAbove200 = above200.map(item => {
    return (
      <ItemsBox
        id={item.id}
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    );
  })

  // To display all the items 
  const displayShoes = shoesData.map((item) => {
    return (
      <ItemsBox
        showDetails={test}
        id={item.id}
        key={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    );
  });

  // Contorolled Structure for items to show
  function which() {
    if (display === "below200") {
      return displayBelow200
    } else if (display === "above200") {
      return displayAbove200
    } else if (query) {
      return filteredByQuery
    } else {
      return displayShoes
    }
  }

  return (
    <>
      <div className="items-container">
        <Nav handleQuery={handleQuery} toggleCartDisplay={toggleCartDisplay} />
        <section>
          <span className="sidebar">
            <Sidebar manageDisplay={manageDisplay} />
          </span>
          <div className="products-container">
            {which()}
          </div>
        </section>
      </div>
      {showInfo && (
        <Info
          handleAddItem={handleAddItem}
          setShowInfo={setShowInfo}
          id={itemInfo.id}
          key={itemInfo.id}
          image={itemInfo.image}
          name={itemInfo.name}
          price={itemInfo.price}
        />
      )}
      {displayCart && <Cart toggleCartDisplay={toggleCartDisplay} cartItems={cartItems} removeItem={removeItem} />}
    </>
  );
}

export default Items