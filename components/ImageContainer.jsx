import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./ImageContainer.scss";

export default function ImageContainer({ data, tab }) {
  const [planetIn, setPlanetIn] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    setPlanetIn(false);
  }, [data]);

  useEffect(() => {
    setShowBubble(tab === "geology");
  }, [tab]);

  return (
    <CSSTransition in={planetIn} timeout={300} classNames="image-container">
      <div className="image-container" style={{ "--height": data.imageScale }}>
        {(tab === "overview" || tab === "geology") && (
          <img
            src={data.images.planet}
            alt={`the planet ${data.name}`}
            className="image-container__planet"
            onLoad={() => setPlanetIn(true)}
          />
        )}

        {tab === "structure" && (
          <img
            src={data.images.internal}
            alt={`${data.name}'s internal structure`}
            className="image-container__planet"
          />
        )}

        <CSSTransition
          in={showBubble}
          timeout={300}
          classNames="image-container__bubble"
        >
          {tab === "geology" && (
            <img
              src={data.images.geology}
              alt={`the surface of ${data.name}`}
              className="image-container__bubble"
            />
          )}
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}
