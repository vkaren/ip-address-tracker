import { useRef, useContext } from "react";
import { AppContext } from "../../context/app";
import arrowIcon from "../../assets/icons/icon-arrow.svg";
import "./styles.css";

function Searcher() {
  const { currentAddress, getAddress } = useContext(AppContext);
  const formRef = useRef();

  const onSearch = async (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const addressToSearch = form.get("address");

    await getAddress(addressToSearch);
  };

  return (
    <form ref={formRef} className="searcher">
      <input
        className="searcher__input"
        name="address"
        type="text"
        placeholder="Search for any IP address or domain"
        defaultValue={currentAddress?.ip}
      />
      <button onClick={onSearch} className="searcher__btn">
        <img className="searcher__btn_icon" src={arrowIcon} alt="arrow icon" />
      </button>
    </form>
  );
}

export default Searcher;
