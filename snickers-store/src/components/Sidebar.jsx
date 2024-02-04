import "./Sidebar.css";

const Sidebar = ({ manageDisplay }) => {

  return (
    <section>
      <div className="side-bar">
        <h3>Categories</h3>
        <form className="categories-form">
          <div className="choices">
            <input
              type="radio"
              id="all"
              name="choice"
              value="all"
              onClick={manageDisplay}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="choices">
            <input
              type="radio"
              id="below200"
              name="choice"
              value="below200"
              onClick={manageDisplay}
            />
            <label htmlFor="below200">Below 200</label>
          </div>
          <div className="choices">
            <input
              type="radio"
              id="above200"
              name="choice"
              value="above200"
              onClick={manageDisplay}
            />
            <label htmlFor="above200">Above 200</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Sidebar