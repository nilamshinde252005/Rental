import React, { useState } from "react";
import { useParams } from 'react-router-dom';//The useParams hook from react-router-dom extracts route parameters from the URL. In this case, it retrieves the id parameter.
import PanZoom from "react-easy-panzoom";
import Map from "./Map";

const Tab = ({properties}) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const {id}=useParams();
  const property=properties.find((p)=>p.id===id);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}//If activeTab === "tab2" is true, then "active" will be added to the class name, making the button appear as the active tab   &  '' =If activeTab === "tab2" is false, then an empty string "" will be returned, meaning no additional class is added.
            onClick={() => setActiveTab('tab1')}// When the button is clicked, it updates the state activeTab to "tab1", indicating that "tab2" is now the active tab and displaying its content.
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Floor plan
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab3')}
          >
            Google map
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === 'tab1' && (
            <div><p>{property.longDescription}</p></div>
            )}  
        
        {activeTab === "tab2" && (
          <div style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}>
            <PanZoom
              enablePan
              enableZoom
              zoomSpeed={1.1}
              minZoom={0.5}
              maxZoom={5}
              style={{ width: "100%", height: "100%", backgroundColor: "#f9f9f9" }}
            >
              <img
                src={property.floorPlanUrl} 
                alt={`${property.name} Floor Plan`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </PanZoom>
          </div>
        )}

        {activeTab === 'tab3' && 
          (
            <div>
              <div><h2>{property.name}</h2></div>
              <Map  properties={properties}  />
            </div>
          )}
      </div>
    </div>//If true (i.e., activeTab is 'tab1'), then the JSX <div>Description</div> will be rendered.
  );
};

export default Tab;
