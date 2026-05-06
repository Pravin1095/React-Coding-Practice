import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useFetchData } from "../hooks/useFetchData";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FetchUsers = () => {
  // const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  // const handleGetData = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   setData(res?.data);
  // };
  // useEffect(() => {
  //   handleGetData();
  // }, []);
  // console.log("check", data);

  const { data, loading } = useFetchData({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  useLocalStorage("allData", "value");
  console.log("check data", data);

  const debounceFn = useCallback((fn, delay) => {
    let timerId;
    console.log("debounce called");
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }, []);

  const handleChange = debounceFn((e) => {
    console.log("check e", e.target.value);
    setSearchData(e.target.value);
  }, 500);

  const filteredData = useMemo(() => {
    if (!searchData) {
      return data;
    } else {
      return data?.filter((d) =>
        d.name.toLowerCase().includes(searchData.toLowerCase())
      );
    }
  }, [searchData, data]);
  return (
    <>
      <input onChange={handleChange} placeholder="Search" />
      {loading && <div>Loading...</div>}
      {filteredData &&
        filteredData.map((d) => {
          return <div>{d.name}</div>;
        })}
    </>
  );
};

export default FetchUsers;
