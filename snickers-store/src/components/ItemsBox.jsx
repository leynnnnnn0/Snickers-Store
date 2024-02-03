import "./ItemsBox.css"

const ItemsBox = ({ image, name, price, id, showDetails }) => {
  return (
    <div className="box-holder" onClick={() => showDetails(id)}>
      <img src={image} alt={name} />
      <div className="about-shoes">
        <h3>{ name }</h3>
        <p>${ price }</p>
      </div>
      <button className="add-to-cart-button">ADD TO CART</button>
    </div>
  );
}

export default ItemsBox