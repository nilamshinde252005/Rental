import React from 'react';
import { useParams } from 'react-router-dom';
import Tab from './Tab';
import Gallery from './Gallary';
import NavigationBar from "./NavigationBar";

const PropertyDetail = ({ properties, handleAddToFavorites, favorites }) => {
  const { id } = useParams();

  // Find the specific property using the id from the URL
  const property = properties.find((p) => p.id === id);

  // Check if the property was found
  if (!property) {
    return <p>Property not found</p>;
  }

  const isFavorite = favorites.some(fav => fav.id === property.id);

  return (
    <div>
      <div className="flex-container">
        <NavigationBar />
        <h1 style={{ marginRight: '43%' }}>Property Search</h1>
      </div>
      <div className="property-detail">
        <h1>{property.name}</h1>
        <img src={property.picture} alt={property.name} />
        <h3>Price: £{property.price}</h3>
        <h3>Location: {property.location}</h3>

        {/* Gallery Component for images */}
        <div>
          <Gallery images={property.images} />
        </div>

        {/* Tab Component */}
        <div>
          <Tab properties={properties} />
        </div>

        {/* Add to Favorites Button */}
        <div>
        <button
  onClick={() => handleAddToFavorites(property)}
  disabled={isFavorite}
>
  {isFavorite ? "Already in Favorites" : "Add to Favorites"}
</button>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
