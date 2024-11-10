import React, { useState } from "react";

function PlantCard({id,name, image, price, inStock: initialInStock}) {
  const [inStock, setInStock] = useState(initialInStock);

  // Toggle stock status and update backend
  function handleStockToggle() {
    const updatedStatus = !inStock;
    setInStock(updatedStatus);

    fetch(`http://localhost:3001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inStock: updatedStatus }),
    }).catch((error) => console.error("Error updating stock status:", error));
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
