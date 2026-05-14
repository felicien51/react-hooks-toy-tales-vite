import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDelete }) {  // accept props
  return (
    <div id="toy-collection">
      {toys.map((toy) => (  // map over toys
        <ToyCard key={toy.id} toy={toy} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ToyContainer;