import "./MainPage.css"
import model from "./images/model.jpg"
import Nav from "../components/Nav";
const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="nav-holder">
        <Nav />
      </div>
      <div className="content-container">
        <div className="content">
          <div className="texts">
            <h1>
              Discover and
              <br /> Find Your Own Fashion!
            </h1>
            <p>
              Explore our curated collection of stylish cloting and accessories
              tailored to your unique taste.
            </p>
            <button>Explore Now</button>
          </div>
          <div className="image-container">
            <img src={model} alt="model" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage