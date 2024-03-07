import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const url = "https://pipeline-mnbv.onrender.com";
  const navigate = useNavigate();

  const sendRequest = async (path, method, body) => {
    console.log("Okay")
    setLoading(true);
    let res = await fetch(`${url}/${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch((error) => {
      setLoading(false)
      navigate("/signup/error");
      console.log(error)
      return res
    });
    console.log(res)
    return res;
  };

  return [loading, setLoading, sendRequest];
};

export default usePost;
