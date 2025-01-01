import React, { useState } from 'react';
import NavigationBar from './NavigationBar'; // Keep NavigationBar here

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
    dateAdded: "",
  });

  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <div>
       <div className="flex-container">
            <NavigationBar />
            <h1 style={{ marginRight: '43%' }}>Property Search</h1>
            </div><br/>

      <form onSubmit={handleSubmit}>
        <select name="type" onChange={handleChange}>
          <option value="">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>

        <input
          name="minPrice"
          type="number"
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          name="maxPrice"
          type="number"
          placeholder="Max Price"
          onChange={handleChange}
        />
        <input
          name="minBedrooms"
          type="number"
          placeholder="Min Bedrooms"
          onChange={handleChange}
        />
        <input
          name="maxBedrooms"
          type="number"
          placeholder="Max Bedrooms"
          onChange={handleChange}
        />
        <input
          name="postcode"
          type="text"
          placeholder="Postcode"
          onChange={handleChange}
        />
        <input
          name="dateAdded"
          type="date"
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
