import arrowIcon from "../../assets/icons/icon-arrow.svg";
import "./styles.css";

function Searcher() {
  return (
    <form className="searcher">
      <input
        className="searcher__input"
        name="address"
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button className="searcher__btn">
        <img className="searcher__btn_icon" src={arrowIcon} alt="arrow icon" />
      </button>
    </form>
  );
}

export default Searcher;
