import React, { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const plantData = {
      name: name,
      image: image,
      price: parseFloat(price), // Ensure price is a number
    };

    try {
      const response = await fetch('http://localhost:3000/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(plantData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Plant added:', data); // Optionally log or handle the response
        // Reset form fields after successful submission
        setName("");
        setImage("");
        setPrice("");
      } else {
        console.error("Failed to add plant");
      }
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;


