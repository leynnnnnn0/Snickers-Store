import "./CartItemBox.css";
import { TbCircleLetterX } from "react-icons/tb";

const CartItemBox = ({name, image, price, removeItem, id}) => {
  return (
      <div className="cart-item">
          <TbCircleLetterX className="remove-button" onClick={() => removeItem(id)}/>
      <img className="shoes-image" src={image} alt={name} />
      <div className="info">
              <h3>{name}</h3>
              <p>{price}</p>
      </div>
    </div>
  );
}

export default CartItemBox