import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
  import "../../scss/MarkerStyle.scss";

const Marker = (props) => {
    const { color, name, id } = props;
    return (
        <div>
          <div
            className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
          />
          <div className="pulse" />
        </div>
      );
  };

  export default Marker;