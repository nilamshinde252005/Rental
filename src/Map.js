import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Styles for the map container
const mapStyles = {
  height: "400px",
  width: "100%",
};

// Default map center
const defaultCenter = {
  lat: 51.36514,
  lng: 0.09042,
};

// Sample properties data
const properties = [
  {
    id: "prop1",
    name: "House on Petts Wood Road",
    location: { lat: 51.36514, lng: 0.09042 },
  },
  {
    id: "prop2",
    name: "Two-bedroom Garden Flat",
    location: { lat: 51.37524, lng: 0.08793 },
  },
  {
    id: "prop3",
    name: "Four-bedroom Family Home",
    location: { lat: 51.39872, lng: 0.01651 },
  },
  {
    id: "prop4",
    name: "Modern One-bedroom Flat",
    location: { lat: 51.37798, lng: 0.09782 },
  },
  {
    id: "prop5",
    name: "five-bedroom Garden Flat",
    location: { lat: 51.36674, lng: 0.08952},
  },
  {
    id: "prop6",
    name: "three-bedroom Family Home",
    location: { lat: 51.40143, lng: 0.01987 },
  },
  {
    id: "prop7",
    name: "Modern three-bedroom Flat",
    location: { lat: 51.37767, lng: 0.08647 },
  },
];

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyASirSEcVIqSes5vbGLsPU_Bdr5MGJfJo0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={property.location}
            title={property.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
