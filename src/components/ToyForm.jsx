import React, { useState } from "react";  // add useState

function ToyForm({ onAddToy }) {  // accept prop
  const [name, setName] = useState("");   // ADD
  const [image, setImage] = useState(""); // ADD

  // ADD this function
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, likes: 0 }),
    })
      .then((r) => r.json())
      .then((newToy) => {
        onAddToy(newToy);
        setName("");
        setImage("");
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>  {/* add onSubmit */}
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}                          // ADD
          onChange={(e) => setName(e.target.value)}  // ADD
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}                           // ADD
          onChange={(e) => setImage(e.target.value)}  // ADD
        />
        <br />
        <input type="submit" name="submit" value="Create New Toy" className="submit" />
      </form>
    </div>
  );
}

export default ToyForm;