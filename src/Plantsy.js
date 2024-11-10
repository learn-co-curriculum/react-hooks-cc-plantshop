import React, { useEffect, useState } from "react";
import PlantCard from "./components/PlantCard";
import AddPlantForm from "./components/AddPlantForm"; // Import AddPlantForm
import SearchBar from "./components/SearchBar";

function Plantsy() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants data on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Add new plant to the list
  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle delete functionality
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
        } else {
          console.error("Error deleting plant from the backend");
        }
      })
      .catch((error) => console.error("Error deleting plant:", error));
  };

  // Handle mark as sold out functionality
  const handleMarkSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />

      {/* Form layout for plant addition */}
      <div className="header-elements">
        <AddPlantForm onAddPlant={handleAddPlant} />
      </div>

      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDelete={handleDelete}
            onMarkSoldOut={handleMarkSoldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default Plantsy;
