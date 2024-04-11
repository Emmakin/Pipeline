import React, { useState, useEffect } from "react";
import HeadAmount from "../../components/HeadAmount.jsx";
import PipelineUnit from "../../components/PipeUnit.jsx";
import Transaction from "../../components/Transaction.jsx";
import { useUser } from "../../MainContext.jsx";
import HeadText from "../../components/HeadText.jsx";
import useRequest from "../../modules/useRequest.jsx";
import Navbar from "../../components/Navbar.jsx";

const WelcomePage = () => {
  const { auth } = useUser();
  const [userDetails, setUserDetails] = useState();
  const [mainPipelines, setMainPipelines] = useState([]);
  const { loading, sendRequest, error, setError, setLoading } = useRequest();

  useEffect(() => {
    getUser()
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => console.log(data));
        } else return res.json();
      })
      .then((data) => {
        setUserDetails(data);
      })
      .catch((error) => console.log(error));

    getMainPipelines()
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => console.log(data));
        } else return res.json();
      })
      .then((data) => {
        // console.log(data.pipelines);
        setMainPipelines(data.pipelines);
      });
  }, []);

  const getUser = async () => {
    const res = await sendRequest("auth/profile", "GET", null, auth);
    // console.log(res);
    return res;
  };

  const getMainPipelines = async () => {
    const res = await sendRequest("pipelines/", "GET", null, auth);
    return res;
  };

  return (
    <div className="p-8">
      <div className="font-inter text-2xl font-medium leading-9 tracking-tight text-left">
        <p>
          Welcome <span>{userDetails?.user?.full_name || "pipeliner"}</span>
        </p>
      </div>
      <section className="flex justify-evenly align-middle mt-7">
        {/* <PipelineUnit pTitle="personal" pAmount="AAAA.AA" />
        <PipelineUnit pTitle="business" pAmount="AAAA.AA" /> */}

        {mainPipelines[0] ? mainPipelines.map((pipeline) => {
          return (
            <PipelineUnit pTitle={pipeline.name} pAmount={XXXX.XX}/>
          )
        }) : <p> No pipelines </p>}
      </section>
      <section className="mt-8 bg-white rounded-2xl pl-8 pr-8">
        <Transaction />
      </section>
      <Navbar />
    </div>
  );
};

export default WelcomePage;
