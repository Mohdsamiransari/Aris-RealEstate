import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../Url";
import { Helmet } from "react-helmet";
export const ResetPassword = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [post, setPosts] = useState([]);

  const forgotPassword = async (password, confirmPassword) => {
    await fetch(`${URL}resetPassword/${params.token}`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify({
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts((posts) => [data, ...posts]);
        setPassword("");
        setConfirmPassword("");

        if (data.success === true) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(password, confirmPassword);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <Helmet>
        <title>Aris - Reset Password</title>
      </Helmet>
      <div className=" basis-1/6 "></div>
      <div className=" basis-full flex items-center ">
        <div className="w-9/12 h-[92%]  mx-auto flex  items-center flex-col  gap-5 justify-center font-sans">
          <h1 className="text-xl font-semibold">Forgot Password</h1>
          <div className="w-[75%] basis-[60%] flex p-5 gap-5">
            <form
              className=" flex flex-col gap-3 w-4/6 h-5/6   justify-center mx-auto relative "
              onSubmit={handleSubmit}
            >
              <div className="flex-col flex">
                <label className="">New Password</label>
                <input
                  type="password"
                  className="border border-transparent border-b-gray-400 px-2 py-2 focus:outline-none focus:border-b-blue-500"
                  placeholder="Enter New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex-col flex">
                <label className="">Confirm New Password</label>
                <input
                  type="password"
                  className="border border-transparent border-b-gray-400 px-2 py-2 focus:outline-none focus:border-b-blue-500"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button className="bg-blue-900 text-white py-1" type="submit">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
