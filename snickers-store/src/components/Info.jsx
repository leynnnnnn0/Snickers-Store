
import "./Info.css";
import { TbCircleLetterX } from "react-icons/tb";
const Info = ({ name, image, price, id, setShowInfo, handleAddItem }) => {
  return (
    <div className="information-box">
      <div className="information">
        <TbCircleLetterX
          className="exit-button"
          onClick={() => setShowInfo("")}
        />
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <div className="more-info">
            <p>Size: 6</p>
            <p>Color: Red</p>
            <p>Price: {price}</p>
          </div>
        </div>
        <button className="add-button" onClick={() => handleAddItem(id)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Info;
