import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllDogs() {
  const [dogs, setDogs] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:5005/api/dogs");
      const parsed = await response.json();
      setDogs(parsed);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>All DOGOOOOS</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog._id}>
            <Link to={`/dogs/${dog._id}`}>
            <h2>{dog.name}</h2>
            <h4>{dog.breed}</h4>
            <p>{dog.age}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllDogs;
