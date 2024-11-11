
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.length === 0 ? (
        <p>No plants found</p>
      ) : (
        plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))
      )}
    </ul>
  );
}

export default PlantList;

