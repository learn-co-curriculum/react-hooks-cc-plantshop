import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]); // Initialize an empty array for plant data
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    // Fetch plant data from the API on component mount
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data)) // Update the state with fetched data
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* Search Input */}
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={handleSearchChange} // Update search term on input change
        />
      </div>

      {/* Plant Cards */}
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            inStock={plant.inStock}
          />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
