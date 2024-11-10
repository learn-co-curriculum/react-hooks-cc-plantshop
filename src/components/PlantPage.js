import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Function to add the new plant to the state
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  return (
    <main>
      <NewPlantForm  onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
      <PlantList plants={plants} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;
