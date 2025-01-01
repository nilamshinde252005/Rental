import React from "react";
import NavigationBar from "./NavigationBar";

const FavoriteList = ({ favorites, handleRemoveFavorite }) => {
  console.log("Favorites:", favorites); // Check the console to verify favorites

  return (
    <div>
      <div className="flex-container">
        <NavigationBar />
        <h1 style={{ marginRight: "43%" }}>Favorite Properties</h1>
      </div>
      <br />

      {favorites.length === 0 ? (
        <p>No properties added to favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((property) => (
            <div key={property.id} className="favorite-item">
              <img
                src={property.picture}
                alt={property.name}
                className="property-image"
              />
              <strong>{property.name}</strong>
              <button
                className="remove-button"
                onClick={() => handleRemoveFavorite(property.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
