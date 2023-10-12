import "./styles.css";

function Address() {
  return (
    <section className="address">
      <div className="address__col">
        <span className="col__title">Ip address</span>
        <span className="col__value">192.212.174.101</span>
      </div>
      <div className="address__col">
        <span className="col__title">Location</span>
        <span className="col__value">Brooklyn, NY 10001</span>
      </div>
      <div className="address__col">
        <span className="col__title">Timezone</span>
        <span className="col__value">UTC-05:00</span>
      </div>
      <div className="address__col">
        <span className="col__title">ISP</span>
        <span className="col__value">Space X Starlink</span>
      </div>
    </section>
  );
}

export default Address;
