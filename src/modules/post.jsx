import { useNavigate } from "react-router-dom";

const post = async (path, body, setLoading) => {
    const url = "https://pipeline-mnbv.onrender.com";
    const navigate = useNavigate();

    setLoading(true);
    let res = await fetch(`${url}/${path}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch((error) => {
      navigate("/signup/error");
      return;
    });
    return res;
};

export default post;
