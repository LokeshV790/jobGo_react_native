import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "../.env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "87a8742c57msh035092622a3a732p1dd611jsn63c41e89ed4b",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    SetIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      SetIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an errror");
    } finally {
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    SetIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
