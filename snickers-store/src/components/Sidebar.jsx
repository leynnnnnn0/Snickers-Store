import "./Sidebar.css";

const Sidebar = ({manageDisplay}) => {

  return (
    <section>
      <div className="side-bar">
        <h3>Categories</h3>
        <form className="categories-form">
          <div className="choices">
            <input
              type="radio"
              id="popular"
              name="choice"
              value="Popular"
              onClick={manageDisplay}
            />
            <label htmlFor="popular">Popular</label>
          </div>
          <div className="choices">
            <input
              type="radio"
              id="onSale"
              name="choice"
              value="Sale"
              onClick={manageDisplay}
            />
            <label htmlFor="onSale">On Sale</label>
          </div>
          <div className="choices">
            <input
              type="radio"
              id="bestSellers"
              name="choice"
              value="Best"
              onClick={manageDisplay}
            />
            <label htmlFor="bestSellers">Best Sellers</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Sidebar