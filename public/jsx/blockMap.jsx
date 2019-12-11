import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
  import "../scss/blockMap.scss";



  export default function BlockMap() {
    return(
        <div id="block__map">
      <div class="container">
          <div class="map__title">
              <h3>
                Проблеми у вашому місті
              </h3>
            </div>
      </div>
      <div id="map-canvas">
           
       </div>
    </div>

    );
  }