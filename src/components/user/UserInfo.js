import React, { useEffect, useState } from "react";
import { UserInfoDetail } from "./UserInfoDetail";
import { URLS } from "../Url";

export const UserInfo = () => {
  //const items = JSON.parse(localStorage.getItem("auth"));
  const [userData, setData] = useState([]);
  console.log(userData)
  const userLogin = async () => {
    const res = await fetch(`${URLS}userProfile`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Cookie: document.cookie,
      },
    });
    const data = await res.json();
    setData(data.user);
  };

  useEffect(() => {
    userLogin();
  }, [setData]);

  return (
    <div className="flex w-full h-full p-3 items-end">
      <div className="w-full  h-[89%] flex flex-col ">
        {/*Username and Email */}
        <div className={"basis-2/6 flex gap-5 items-center"}>
          <div
            className={userData.avatar?"w-24 h-24  rounded-full ml-8 bg-cover":"hidden"}
            
            style={{ backgroundImage: `url(${userData.avatar})` }}
          ></div>
          <div>
            <h1 className="text-2xl">{userData.username}</h1>
            <p className="text-sm">{userData.email}</p>
          </div>
        </div>

        <UserInfoDetail userinfoprop={userData} />
      </div>
    </div>
  );
};
