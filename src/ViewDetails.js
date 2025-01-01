import React from "react";
import PropertyDetail from "./PropertyDetail";

const ViewDetails = ({ properties, handleAddToFavorites, favorites = [] }) => {
    const handleDragStart = (e, property) => {
        e.dataTransfer.setData('property', JSON.stringify(property));
    };

    return (
        <div>
            <h2>List</h2>
            {properties.map((property) => {
                const isFavorite = favorites.some((favorite) => favorite.id === property.id);

                return (
                    <div key={property.id}>
                        <div draggable onDragStart={(e) => handleDragStart(e, property)}>
                            <PropertyDetail property={property} />
                        </div>

                        <button
                            onClick={() => handleAddToFavorites(property)}
                            disabled={isFavorite}
                        >
                            {isFavorite ? "Already in Favorites" : "Add to Favorites"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ViewDetails;
