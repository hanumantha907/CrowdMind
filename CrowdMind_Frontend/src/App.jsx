import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import CrowdCard from "./components/CrowdCard.jsx";
import CrowdList from "./components/CrowdList.jsx";
import CrowdMap from "./components/CrowdMap.jsx";
import "./App.css";

function App() {
  const [crowdData, setCrowdData] = useState([]);


  useEffect(() => {
  const fetchCrowdData = () => {
    fetch("http://localhost:8080/api/crowd")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch crowd data");
        }
        return response.json();
      })
      .then((data) => setCrowdData(data))
      .catch((error) => console.error("API Error:", error));
  };

  fetchCrowdData();

  const interval = setInterval(fetchCrowdData, 10000);

  return () => clearInterval(interval);
}, []);
 
  const totalPeople = crowdData.reduce(
    (total, crowd) => total + crowd.peopleCount,
    0
  );

  const highDensity = crowdData.filter(
    (crowd) => crowd.density === "HIGH"
  ).length;

  return (
    <div>
      <Navbar />

      <main className="dashboard">
        <h1>Crowd Monitoring Dashboard</h1>

        <div className="cards">
          <CrowdCard title="Total Locations" value={crowdData.length} />
          <CrowdCard title="High Density" value={highDensity} />
          <CrowdCard title="Total People" value={totalPeople} />
        </div>

        <CrowdList crowdData={crowdData} />
        <section className="map-section">
        <h2>Bangalore Crowd Map</h2>
        < CrowdMap crowdData={crowdData} />
        </section>
      </main>
    </div>
  );
}

export default App;