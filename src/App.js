import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import FavoriteList from './FavoriteList';
import './components/App.css';

const App = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch('/properties.json')
      .then((response) => response.json())
      .then((data) => {
        setPropertiesData(data.properties);
        setFilteredProperties(data.properties);
      })
      .catch((error) => console.error('Error fetching properties data:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (criteria) => {
    const results = propertiesData.filter((property) => {
      return (
        (!criteria.type || property.type === criteria.type) &&
        (!criteria.minPrice || property.price >= criteria.minPrice) &&
        (!criteria.maxPrice || property.price <= criteria.maxPrice) &&
        (!criteria.minBedrooms || property.bedrooms >= criteria.minBedrooms) &&
        (!criteria.maxBedrooms || property.bedrooms <= criteria.maxBedrooms) &&
        (!criteria.postcode || property.location.startsWith(criteria.postcode)) &&
        (!criteria.dateAdded || new Date(property.added.year, property.added.month - 1, property.added.day) >= new Date(criteria.dateAdded))
      );
    });
    setFilteredProperties(results);
  };

  const handleAddToFavorites = (property) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === property.id)) {
        return [...prevFavorites, property];
      }
      return prevFavorites;
    });
  };

  const handleRemoveFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((property) => property.id !== id)
    );
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchForm onSearch={handleSearch} />
              <PropertyList properties={filteredProperties} />
            </>
          }
        />
        <Route
          path="/properties/:id"
          element={
            <PropertyDetail
              properties={propertiesData}
              handleAddToFavorites={handleAddToFavorites}
              favorites={favorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoriteList
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
