import { useEffect, useState } from "react";
import {
  GreenLight,
  ParentWidth,
  RedLight,
  YellowLight,
} from "./TrafficLight.styles";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  useEffect(() => {
    let delay;
    let timerId;
    if (color === "red") {
      delay = 2000;
    } else if (color === "yellow") {
      delay = 1000;
    } else {
      delay = 3000;
    }
    timerId = setTimeout(() => {
      if (delay === 2000) {
        setColor("yellow");
      } else if (delay === 1000) {
        setColor("green");
      } else {
        setColor("red");
      }
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [color]);
  return (
    <>
      <div>Hello</div>
      <ParentWidth>
        <RedLight color={color !== "red"} />
        <YellowLight color={color !== "yellow"} />
        <GreenLight color={color !== "green"} />
      </ParentWidth>
    </>
  );
};

export default TrafficLight;
