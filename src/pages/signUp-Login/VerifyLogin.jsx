import React, { useEffect } from 'react'
import Verified from "../../assets/verified.svg"
import Login from './Login';
import { useLocation } from 'react-router-dom';

const dummytrab={}

const VerifyLogin = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  // console.log(token, 'opopop');

  // This is still in progress
  // useEffect(() => {
  //   const fetchConfirmationLink = async () => {
  //     try{
  //       const response = await fetch(`pipeline-mnbv.onrender.com/confirm?token=${token}`);
  //       const data = await response.json();
  //       setConfirmationLink(data.link);
  //     } catch (error) {
  //       console.error('verification fail:', error);
  //       <div>
  //         Verification fail
  //       </div>
  //     }
  //   };

  //   if (token) {
  //     fetchConfirmationLink();
  //   }
  // }, [token]);


  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 pl-5 text-cente gap-2 flex text-2 font-light text-black">
            <span>Verification Successful! </span>
            <img src={Verified} alt='verified logo' />
          </h2>
          <Login />
          {/* <button
            className="text-xs bg-mainBlueFade text-mainBlue px-6 py-1.5 rounded-full h-fit"
            onClick={() => navigate("/signup")}
          >
            Click to Login
          </button> */}
        {/* 
        //to test whether the token works
        <div className="mt-8">
          <p className="text-center text-gray-700">
            Token received: <span className="font-bold">{token}</span>
          </p>
        </div> */}

        </div>
      </div>
    </div>
    </div>
  )
}

export default VerifyLogin