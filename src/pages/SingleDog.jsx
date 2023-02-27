import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SingleDog() {
  const navigate = useNavigate();
  const { dogId } = useParams();
  const [dog, setDog] = useState("");

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:5005/api/dogs/${dogId}`);
      const parsed = await response.json();
      setDog(parsed);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [dogId]);

  async function handleDelete() {
    await fetch(`http://localhost:5005/api/dogs/${dogId}`, {
      method: "DELETE",
    });
    navigate("/dogs");
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <h4>{dog.breed}</h4>
      <p>{dog.age}</p>
      <Link to={`/dogs/update/${dog._id}`}>
        <button type="button">Update</button>
      </Link>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default SingleDog;
