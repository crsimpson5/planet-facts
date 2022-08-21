import { useEffect, useState } from "react";
import AnimatedNumber from "animated-number-react";

import "./Stats.scss";

const interval = 300;
const formatValue = (val, isComplete) => {
  if (isComplete) {
    return (Math.round(val * 100) / 100).toLocaleString();
  }
  return parseInt(val).toLocaleString();
};

function Stat({ text, value, delay = 0 }) {
  const [num, setNum] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  // Parse number value and unit
  useEffect(() => {
    setIsComplete(false);

    if (value.includes("°")) {
      setNum(value.split("°")[0]);
      setUnit("°C");
    } else {
      setNum(value.split(" ")[0]);
      setUnit(" " + value.split(" ")[1]);
    }
  }, [value]);

  return (
    <div className="stat">
      <span>{text}</span>{" "}
      <span className="stat__value">
        <AnimatedNumber
          value={num}
          formatValue={(val) => formatValue(val, isComplete)}
          duration={300}
          delay={delay}
          complete={() => setIsComplete(true)}
        />
        {unit}
      </span>
    </div>
  );
}

export default function Stats({ data }) {
  return (
    <div className="stats">
      <Stat text={"Rotation Time"} value={data.rotation} />
      <Stat text={"Revolution Time"} value={data.revolution} delay={interval} />
      <Stat text={"Radius"} value={data.radius} delay={interval * 2} />
      <Stat
        text={"Average Temp."}
        value={data.temperature}
        delay={interval * 3}
      />
    </div>
  );
}
