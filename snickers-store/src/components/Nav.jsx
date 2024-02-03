import "./Nav.css"
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const Nav = ({handleQuery, toggleCartDisplay}) => {
  return (
    <div className="nav-container">
      <h3>Logo</h3>
      <div className="links">
        <Link to="/home">Home</Link>
        <a href="#">About</a>
        <a href="#">Contacts</a>
        <Link to="/products">Products</Link>
      </div>
      <form className="search-bar">
        <input type="text" name="query" onChange={handleQuery}/>
        <span className="search-icon">
          <CiSearch />
        </span>
      </form>
      <div className="buttons">
        <span className="bag-icon" onClick={toggleCartDisplay}>
          <IoBagHandleOutline />
        </span>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default Nav