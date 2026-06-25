import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res?.data);
    } catch (err) {
      console.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);

  return { data, loading };
};
