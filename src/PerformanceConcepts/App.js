import { useMemo, useState } from "react";
import Product from "./Product";
import Archive from "./Archive";

// As theme changes Archive will also be re-rendered again and again whenever theme changes as when Parent renders Child will also be rendered.

//This can be optimized using memo. Wrap Archive with Memo so that Archive renders only when its prop changes
const PerformanceApp = () => {
  const [theme, setTheme] = useState("light"); // State is here!
  const [show, setShow] = useState(true);

  console.log("check theme", theme)

  //As this is a normal const variable , react recreates this on every render, i.e whenever the theme state getting changed, because of this the prop passed sampleObjectAsProps is changed everytime in Archive, hence Aechive will be rendering every time as its prop now changes.

  // const sampleObjectAsProps = {
  //   show : false,
  //   title : "Testing Archive"
  // }

  //To prevent the above problem, we use useMemo so that sampleObjectAsProps will not be recreated unless its dependency in useMemo gets changed

  // We can test the result using Profiler in devtools
  const sampleObjectAsProps = useMemo(()=>{
    return {
    show : false,
    title : "Testing Archive"
  }
  },[])

  return (
    <>
      {/* If changing theme re-renders App, BOTH children re-render */}
      <Product changeTheme={() => setTheme((prev)=>prev==='dark' ? "light" : "dark")} /> 
      <Archive show={show} sampleObjectAsProps={sampleObjectAsProps} /> 
    </>
  );
};

export default PerformanceApp