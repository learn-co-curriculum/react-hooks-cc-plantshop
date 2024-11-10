import React, { useState } from "react";

function AddPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = { name, image, price: parseFloat(price) };

    // Add the new plant to the backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddPlant(data); // Trigger handleAddPlant function in Plantsy.js
        setName(""); // Reset form fields
        setImage("");
        setPrice("");
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="new-plant-form">
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default AddPlantForm;
