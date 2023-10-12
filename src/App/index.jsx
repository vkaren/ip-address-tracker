import Searcher from "../components/Searcher";
import Address from "../components/Address";
import MapSection from "../components/MapSection";
import "./styles.css";

function App() {
  return (
    <>
      <header className="app__header">
        <div className="header">
          <h1 className="header__title">IP Address Tracker</h1>
          <Searcher />
          <Address />
        </div>
      </header>
      <main className="app__main">
        <MapSection />
      </main>
    </>
  );
}

export default App;
