import { useEffect, useState } from "react";

function useFetch(endpoint, callback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(endpoint);
    function fetchData() {
      fetch(endpoint)
        .then((response) => {
          if (response.ok) return response.json();

          throw new Error("Cannot fetch");
        })
        .then((data) => {
          if (loading) setLoading(false);
          if (callback) return callback(data, setData);
          setData(data);
        })
        .catch((err) => setError(err));
    }
    fetchData()
  }, [callback, endpoint, loading]);

  return { loading, data, error };
}

export { useFetch };
