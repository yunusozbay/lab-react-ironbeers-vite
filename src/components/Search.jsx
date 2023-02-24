import React, { useState } from 'react'

function Search({searchInput, setSearchInput}) {
    const [searchInput, setSearchInput] = useState('');
    const handleChange = (event) => {
        setSearchInput(event.target.value);
      };
  return (
    <>
      <label>Search</label>
      <input value={searchInput} type="search" placeholder="Search here" onChange={handleChange} />
    </>
  );
}

export default Search;