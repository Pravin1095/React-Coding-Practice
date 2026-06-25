import { useState } from "react";
import Product from "./Product";
import Archive from "./Archive";

// As theme changes Archive will also be re-rendered again and again whenever theme changes as when Parent renders Child will also be rendered.

//This can be optimized using memo. Wrap Archive with Memo so that Archive renders only when its prop changes
const PerformanceApp = () => {
  const [theme, setTheme] = useState("light"); // State is here!
  const [show, setShow] = useState(true);

  console.log("check theme", theme)

  const sampleObjectAsProps = {
    show : false,
    title : "Testing Archive"
  }

  return (
    <>
      {/* If changing theme re-renders App, BOTH children re-render */}
      <Product changeTheme={() => setTheme((prev)=>prev==='dark' ? "light" : "dark")} /> 
      <Archive show={show} sampleObjectAsProps={sampleObjectAsProps} /> 
    </>
  );
};

export default PerformanceApp