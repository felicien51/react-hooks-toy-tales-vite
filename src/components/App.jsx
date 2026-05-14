import React, { useState, useEffect } from "react";  // add useEffect
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);  // ADD

  // ADD this whole useEffect
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // ADD these three functions
  function handleAddToy(newToy) {
    setToys((toys) => [...toys, newToy]);
  }

  function handleLike(updatedToy) {
    setToys((toys) =>
      toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  function handleDelete(id) {
    setToys((toys) => toys.filter((toy) => toy.id !== id));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}  {/* pass onAddToy */}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLike={handleLike} onDelete={handleDelete} />  {/* pass props */}
    </>
  );
}

export default App;