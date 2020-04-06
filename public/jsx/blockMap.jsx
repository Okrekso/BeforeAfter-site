import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo,
    Component
  } from "react";
  import "../scss/blockMap.scss";
  import SimpleMap from "./map";

  export default function BlockMap() {

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
        <SimpleMap />
       </div>
    </div>

    );
  }