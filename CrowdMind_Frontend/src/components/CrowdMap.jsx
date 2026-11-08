
import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create coloured crowd markers
const createIcon = (density) => {
  const colors = {
    HIGH: "red",
    MEDIUM: "orange",
    LOW: "green"
  };

  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background:${colors[density] || "gray"};
      width:20px;
      height:20px;
      border-radius:50%;
      border:3px solid white;
      box-shadow:0 0 5px #555;
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

// Move map to selected location
function MapMover({ selected }) {
  const map = useMap();

  if (selected) {
    map.flyTo(
      [selected.latitude, selected.longitude],
      16,
      { duration: 1.5 }
    );
  }

  return null;
}

function CrowdMap({ crowdData = [] }) {

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search OpenStreetMap locations
  const handleSearch = async () => {

    if (!search.trim()) return;

    try {
      setLoading(true);
      setSearchResults([]);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(search + ", Bangalore, India")}&limit=5`
      );

      if (!response.ok) {
        throw new Error("Location search failed");
      }

      const data = await response.json();

      setSearchResults(data);

      if (data.length === 0) {
        alert("Location not found!");
      }

    } catch (error) {
      console.error("Search error:", error);
      alert("Unable to search location. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Select a search result
  const selectLocation = (place) => {

    setSelected({
      latitude: Number(place.lat),
      longitude: Number(place.lon),
      location: place.display_name
    });

    setSearch(place.display_name);
    setSearchResults([]);
  };

  return (
    <div>

      {/* Search bar */}
      <div className="map-search">

        <input
          type="text"
          placeholder="Search Bangalore location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {/* Search results */}
      {searchResults.map((place) => (
        <div
          key={place.place_id}
          className="search-result"
          onClick={() => selectLocation(place)}
        >
          {place.display_name}
        </div>
      ))}

      {/* Map */}
      <MapContainer
        center={[12.9767, 77.5713]}
        zoom={13}
        style={{ height: "450px", width: "100%" }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapMover selected={selected} />

        {/* Database crowd markers */}
        {crowdData.map((crowd) => (
          <Marker
            key={crowd.id}
            position={[crowd.latitude, crowd.longitude]}
            icon={createIcon(crowd.density)}
          >
            <Popup>
              <h3>{crowd.location}</h3>
              <p>Density: {crowd.density}</p>
              <p>People: {crowd.peopleCount}</p>
            </Popup>
          </Marker>
        ))}

        {/* Selected external location marker */}
        {selected && (
          <Marker
            position={[selected.latitude, selected.longitude]}
          >
            <Popup>
              <h3>{selected.location}</h3>
              <p>External map search result</p>
              <p>Crowd data not available yet.</p>
            </Popup>
          </Marker>
        )}

      </MapContainer>

    </div>
  );
}

export default CrowdMap;
