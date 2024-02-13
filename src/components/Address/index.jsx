import { useContext } from "react";
import { AppContext } from "@/context/app";
import "./styles.css";

function Address() {
  const { currentAddress } = useContext(AppContext);
  const addressColumns = [
    {
      title: "Ip address",
      value: currentAddress?.ip,
    },
    {
      title: "Location",
      value: `${currentAddress?.location?.city || ""}, ${
        currentAddress?.location?.country || ""
      }`,
    },
    {
      title: "Timezone",
      value: currentAddress?.location?.timezone,
    },
    {
      title: "ISP",
      value: currentAddress?.isp,
    },
  ];
  return (
    <section className="address">
      {addressColumns.map((col) => (
        <div key={col.title} className="address__col">
          <span className="col__title">{col.title}</span>
          <span className="col__value">{col.value}</span>
        </div>
      ))}
    </section>
  );
}

export default Address;
