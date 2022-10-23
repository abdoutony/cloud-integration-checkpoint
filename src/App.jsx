import { Map } from "./components/Map";

function App() {
  const location = {
    address:
      "GOMYCODE Bab Ezzouar, 1, Rue Rezig Kadda, Bd de l'Université, Bab Ezzouar 16000",
    lat: 36.71508613092767,
    lng: 3.188946181537561,
  };
  return <Map location={location} zoomLevel={17} />;
}

export default App;
