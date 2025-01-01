import React from 'react';
import { Link } from 'react-router-dom';


const PropertyList = ({ properties }) => {
  
    return (
      <div className="property-list">

        {properties.map((property) => (
          <div key={property.id}>
            <figure>
              <img src={property.picture} alt={property.type} />
              <figcaption>
                <h5>{property.type} - £{property.price}</h5>
                <p>{property.shortDescription}</p>
                {/* Updated Link to property details page */}
                <Link to={`/properties/${property.id}`}>View Details</Link>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    );
  };

export default PropertyList;
