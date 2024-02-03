import "./Cart.css"
import { TbCircleLetterX } from "react-icons/tb";
import CartItemBox from "./CartItemBox";

const Cart = ({ toggleCartDisplay, cartItems, removeItem}) => {
    const displayCartItems = cartItems.map(item => {
        return (
            <CartItemBox image={item.image} name={item.name} price={item.price} removeItem={ removeItem} key={item.id} id={item.id}/>
        )
    })
  return (
    <div className="cart-container">
      <div className="cart">
              <TbCircleLetterX className="exit-button" onClick={toggleCartDisplay} />
              {cartItems && displayCartItems}
      </div>
    </div>
  );
};

export default Cart