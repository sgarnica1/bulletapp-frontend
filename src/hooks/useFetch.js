import { useEffect, useState } from "react";

function useFetch(url, callback) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error("Cannot fetch");
      })
      .then((data) => {
        if (callback) return callback(data, setData);

        setData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { data };
}

export { useFetch };
