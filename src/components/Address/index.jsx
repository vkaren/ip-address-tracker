import { useContext } from "react";
import { AppContext } from "../../context/app";
import "./styles.css";

function Address() {
  const { currentAddress } = useContext(AppContext);

  return (
    <section className="address">
      <div className="address__col">
        <span className="col__title">Ip address</span>
        <span className="col__value">{currentAddress?.ip}</span>
      </div>
      <div className="address__col">
        <span className="col__title">Location</span>
        <span className="col__value">{`${
          currentAddress?.location?.city || ""
        }, ${currentAddress?.location?.country || ""}`}</span>
      </div>
      <div className="address__col">
        <span className="col__title">Timezone</span>
        <span className="col__value">{currentAddress?.location?.timezone}</span>
      </div>
      <div className="address__col">
        <span className="col__title">ISP</span>
        <span className="col__value">{currentAddress?.isp}</span>
      </div>
    </section>
  );
}

export default Address;
