import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { URL } from "../Url";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [post, setPosts] = useState("");

  const forgotPassword = async (email) => {
    await fetch(`${URL}reset`, {
      method: "POST",
      credentials: "include",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setEmail("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email);
  };

  return (
    <>
    <Helmet>
        <title>Aris - Forgot Password</title>
      </Helmet>
      <div className="h-screen w-full flex flex-col">
        <div className="basis-1/6 "></div>
        <div className=" basis-full flex items-center ">
          <div className="w-9/12 h-[92%]  mx-auto flex  items-center flex-col  gap-5 justify-center font-sans">
            <h1 className="text-xl  font-semibold">Forgot Password</h1>
            <div className="w-[75%] basis-[60%] flex p-5 gap-5">
              <form
                className=" flex flex-col gap-3 w-4/6 h-5/6   justify-center mx-auto relative "
                onSubmit={handleSubmit}
              >
                <div className="flex-col flex">
                  <label className="">Email</label>
                  <input
                    type="email"
                    className="border border-transparent border-b-gray-400 px-2 py-2 focus:outline-none focus:border-b-blue-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {post.success === true ? <p>{post.message}</p> : ""}

                <button
                  className="bg-slate-800 text-white py-2 hover:bg-slate-900"
                  type="submit"
                >
                  Forgot Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
