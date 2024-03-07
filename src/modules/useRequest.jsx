import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const url = "https://pipeline-mnbv.onrender.com";
  const navigate = useNavigate();

  const sendRequest = async (path, method, body) => {
    setLoading(true);
    let res = await fetch(`${url}/${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch((error) => {
      setLoading(false)
      navigate("/error");
      return 
    });
    setLoading(false)
    return res;
  };

  return {loading, setLoading, sendRequest};
};

export default useRequest;
