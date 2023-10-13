import { createContext, useState, useEffect } from "react";

const AppContext = createContext({});

function AppProvider({ children }) {
  const [currentAddress, setCurrentAddress] = useState({});

  useEffect(() => {
    (async () => await getAddress())();
  }, []);

  const getAddress = async (addressToSearch) => {
    const apiKey = "at_hMAbYbI5zKiR1AqyqZKotCld1xwdf";
    let fetchUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

    if (addressToSearch) {
      if (addressToSearch.match(/[a-z]+/i)) {
        fetchUrl += `&domain=${addressToSearch}`;
      } else {
        fetchUrl += `&ipAddress=${addressToSearch}`;
      }
    }

    const response = await fetch(fetchUrl);
    const address = await response.json();

    setCurrentAddress(address);
  };

  return (
    <AppContext.Provider
      value={{
        currentAddress,
        getAddress,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
