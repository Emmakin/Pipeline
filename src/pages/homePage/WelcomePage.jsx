import React, { useState, useEffect } from "react";
import HeadAmount from "../../components/HeadAmount.jsx";
import PipelineUnit from "../../components/PipeUnit.jsx";
import Transaction from "../../components/Transaction.jsx";
import { useUser } from "../../MainContext.jsx";
import HeadText from "../../components/HeadText.jsx";
import useRequest from "../../modules/useRequest.jsx";

const WelcomePage = () => {
  // const {userDetails} = useUser()
  const [userDetails, setUserDetails] = useState();
  const [mainPipelines, setMainPipelines] = useState();
  const { loading, sendRequest, error, setError, setLoading } = useRequest();

  useEffect(() => {
    getUser()
      .then((res) => {
        if (!res.ok) {
          return res
            .json()
            .then((data) => console.log(data));
        } else return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserDetails(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getMainPipelines()
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => console.log(data))
        } else return res.json()
      })
      .then((data) => {
        console.log(data)
        setMainPipelines(data)
      })
  }, [])

  const getUser = async () => {
    const res = await sendRequest("auth/profile", "GET");
    console.log(res);
    return res;
  };

  const getMainPipelines = async () => {
    const res = await sendRequest("auth/pipeines/", "GET")
    return res
  }

  return (
    <div className="p-8">
      <div className="font-inter text-2xl font-medium leading-9 tracking-tight text-left">
        <p>
          Welcome <span>{userDetails?.full_name || "pipeliner"}</span>
        </p>
      </div>
      <section className="flex justify-evenly align-middle mt-7">
        <PipelineUnit pTitle="personal" pAmount="AAAA.AA" />
        <PipelineUnit pTitle="business" pAmount="AAAA.AA" />
      </section>
      <section className="mt-8 bg-white rounded-2xl pl-8 pr-8">
        <Transaction />
      </section>
    </div>
  );
};

export default WelcomePage;
