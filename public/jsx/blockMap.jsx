import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo,
    Component
  } from "react";
  import "../scss/blockMap.scss";
  import { GoogleMap, withGoogleMap } from "react-google-maps";


  export default function BlockMap() {

    const MyGoogleMapComponent = withGoogleMap(props => {
      <GoogleMap />
    });

      return(
        <div id="block__map">
      <div className="container">
          <div className="map__title">
              <h3>
                Проблеми у вашому місті
              </h3>
            </div>
      </div>
      <div id="map-canvas"> 
        <MyGoogleMapComponent 
          containerElement = {
            <div style={{ height:"100%" }} />
          }
          mapElement = {
            <div style={{ height:"100%" }} />
          }
        />
       </div>
    </div>

    );
  }