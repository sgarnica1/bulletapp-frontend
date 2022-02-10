import { useEffect, useState } from "react";

function useFetch(url, callback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
    }, 2000);
  }, []);

  return { loading, data, error };
}

export { useFetch };
