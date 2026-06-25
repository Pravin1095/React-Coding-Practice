import { useEffect, useState } from "react";
import {
  GreenLight,
  ParentWidth,
  RedLight,
  YellowLight,
} from "./TrafficLight.styles";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const trafficLights = {
    red :{
      duration : 2000, next:"yellow"
    },
    yellow :{
      duration : 1000, next :"green"
    },
    green : {
      duration: 3000, next : "red"
    }
  }
    
  
  useEffect(() => {
    let timerId;
    const {duration, next} = trafficLights[color]
    // if (color === "red") {
    //   delay = 2000;
    // } else if (color === "yellow") {
    //   delay = 1000;
    // } else {
    //   delay = 3000;
    // }
    timerId = setTimeout(() => {
    //   if (delay === 2000) {
    //     setColor("yellow");
    //   } else if (delay === 1000) {
    //     setColor("green");
    //   } else {
    //     setColor("red");
    //   }

    setColor(next)
    }
    , duration);

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
