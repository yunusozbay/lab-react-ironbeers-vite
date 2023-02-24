import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomBeer() {
  const [randomBeerState, setRandomBeerState] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setRandomBeerState(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(randomBeerState);
  return (
    <div>
      <div
        style={{
          border: "1px solid white",
          borderRadius: "12px",
          marginBottom: "1rem",
        }}
      >
        {randomBeerState && (
          <>
            <img
              src={randomBeerState?.image_url}
              alt="beer"
              style={{ height: "100px" }}
            />
            <h3>{randomBeerState.name}</h3>
            <h4>{randomBeerState.tagline}</h4>
            <h4>First brewed: {randomBeerState.first_brewed}</h4>
            <p>Attenuation level: {randomBeerState.attenuation_level}</p>
            <p>{randomBeerState.description}</p>
            <h5>Created by: {randomBeerState.contributed_by}</h5>
          </>
        )}
      </div>
    </div>
  );
}

export default RandomBeer;
