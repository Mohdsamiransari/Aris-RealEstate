import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { URLS } from "../Url";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPosts] = useState("");
  const navigate = useNavigate();

  const userLogin = async (email, password) => {
    await fetch(`${URLS}Userlogin`, {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setEmail("");
        setPassword("");

        if (data.success === true) {
          localStorage.setItem("auth", JSON.stringify(data));
          document.cookie = `token=${data.token}`;
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    userLogin(email, password);
  };

  return (
    <>
    <Helmet>
      <title>Aris - Login</title>
    </Helmet>
    
      <div className="h-screen w-full flex flex-col">
        <div className=" basis-1/6"></div>
        <div className=" basis-full flex items-center ">
          <div className="w-9/12 h-[92%]  mx-auto flex  items-center flex-col  font-sans bg-transparent ">
            <h1 className="text-2xl font-semibold ">Log In</h1>

            <div className="w-[75%] basis-[60%] flex max-lg:flex-col p-5 gap-5">
              <form
                className=" flex flex-col  justify-center  basis-4/6 p-4 gap-5 text-sm "
                onSubmit={handleSubmit}
              >
                <div className="flex-col flex">
                  <label htmlFor="email" className="">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`border border-transparent border-b-gray-400 px-2 py-2 focus:outline-none focus:border-b-blue-500  `}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="">Password</label>

                  <input
                    type="password"
                    className="border border-transparent border-b-gray-400 px-2 py-2 focus:outline-none focus:border-b-blue-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {post.success === false ? (
                  <p className="text-red-500">{post.message}</p>
                ) : (
                  ""
                )}

                <button
                  className="bg-slate-800 hover:bg-slate-900 text-white py-2"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>

              <p className="basis-10 flex items-center justify-center text-xs font-semibold text-gray-600">
                OR
              </p>
              <div className="flex flex-col basis-4/6  px-4 gap-5 justify-center text-sm font-semibold ">
                <Link
                  to="/register"
                  className="bg-slate-800 py-2 text-white text-center "
                >
                  CREATE ACCOUNT
                </Link>

                <Link
                  to="/forgotpassword"
                  className="bg-red-500 py-2  text-center text-white "
                >
                  FORGOT PASSWORD
                </Link>
              </div>
            </div>
            <p className="text-center text-xs font-semibold text-gray-700">
              Secure Login with reCAPTCHA subject to Google <br /> Terms &
              Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
