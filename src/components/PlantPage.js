import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
