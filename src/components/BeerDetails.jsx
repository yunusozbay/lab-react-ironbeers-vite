import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const { beerId } = useParams();
  const [singleBeer, setSingleBeer] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setSingleBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [beerId]);
  return (
    <div>
      <div
        style={{
          border: "1px solid white",
          borderRadius: "12px",
          marginBottom: "1rem",
        }}
      >
        {singleBeer && (
          <>
            <img
              src={singleBeer?.image_url}
              alt="beer"
              style={{ height: "100px" }}
            />
            <h3>{singleBeer.name}</h3>
            <h4>{singleBeer.tagline}</h4>
            <h4>First brewed: {singleBeer.first_brewed}</h4>
            <p>Attenuation level: {singleBeer.attenuation_level}</p>
            <p>{singleBeer.description}</p>
            <h5>Created by: {singleBeer.contributed_by}</h5>
          </>
        )}
      </div>
    </div>
  );
}

export default BeerDetails;
