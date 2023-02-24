import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    setBeers(response.data);
  };
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <>
        <label>Search</label>
        <input
          value={searchInput}
          type="search"
          placeholder="Search here"
          onChange={handleChange}
        />
      </>
      {beers.map((beer) => (
        <div
          key={beer._id}
          style={{
            border: "1px solid white",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        >
          <img src={beer.image_url} alt="beer" style={{ height: "100px" }} />
          <Link to={`/beers/${beer._id}`}>
            <h3>{beer.name}</h3>
          </Link>
          <h4>{beer.tagline}</h4>
          <h5>Created by: {beer.contributed_by}</h5>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
