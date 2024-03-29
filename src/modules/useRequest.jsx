import { useState, useCallback, } from "react";
import { useNavigate } from "react-router-dom";

const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: undefined });


  const url = "https://pipeline-mnbv.onrender.com";
  const navigate = useNavigate();

  const sendRequest = useCallback(async (path, method, body) => {
    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body && method !== "GET") {
      requestOptions.body = JSON.stringify(body);
    }
    setLoading(true);

    let res = await fetch(`${url}/${path}`, requestOptions).catch((error) => {
      setLoading(false);
      setError({ status: true, msg: "Something went wrong. Try again." });
      return new Error(error);
    });
    setLoading(false);
    return res;
  }, []);

  return { loading, setLoading, sendRequest, error, setError };
};

export default useRequest;
