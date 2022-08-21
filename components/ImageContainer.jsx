import { useEffect, useRef } from "react";

import "./ImageContainer.scss";

export default function ImageContainer({ data, tab }) {
  function Inner() {
    switch (tab) {
      case "overview":
        return (
          <>
            <img
              src={data.images.planet}
              alt=""
              className="image-container__planet"
            />
          </>
        );
      case "structure":
        return (
          <>
            <img
              src={data.images.internal}
              alt=""
              className="image-container__planet"
            />
          </>
        );
      case "geology":
        return (
          <>
            <img
              src={data.images.planet}
              alt=""
              className="image-container__planet"
            />
            <img
              src={data.images.geology}
              alt=""
              className="image-container__bubble"
            />
          </>
        );
    }
  }

  return (
    <div className="image-container" style={{ "--height": data.imageScale }}>
      <Inner />
    </div>
  );
}
