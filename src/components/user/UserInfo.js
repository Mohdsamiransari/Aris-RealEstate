import React, { useEffect, useState } from "react";
import { UserInfoDetail } from "./UserInfoDetail";
import { UpdateProfile } from "./UpdateProfile";
import { URL } from "../Url";

export const UserInfo = () => {
  //const items = JSON.parse(localStorage.getItem("auth"));
  const [userData, setData] = useState([]);
  const [isUpdateDetailClicked, setIsUpdateDetailClicked] = useState(false);
  const userLogin = async () => {
    let res = await fetch(`${URL}userProfile`, {
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

  const HandleUpdateDetail = () => {
    setIsUpdateDetailClicked(!isUpdateDetailClicked);
  };
  console.log(userData);
  return (
    <div className="flex w-full h-full p-3 items-end">
      
      <div className="w-full  h-[89%] flex flex-col ">
        {/*Username and Email */}
        <div
          className={
            !isUpdateDetailClicked
              ? "basis-2/6 flex gap-5 items-center"
              : "hidden"
          }
        >
          <div
            className="w-24 h-24  rounded-full ml-8 bg-cover"
            style={{ backgroundImage: `url(${userData.avatar})` }}
          ></div>
          <div>
            <h1 className="text-2xl">{userData.username}</h1>
            <p className="text-sm">{userData.email}</p>
          </div>
        </div>
        {!isUpdateDetailClicked ? (
          <UserInfoDetail userinfoprop={userData} />
        ) : (
          <UpdateProfile />
        )}

        {/*Update Detail button */}

        <div className="basis-1/4 px-10">
          {!isUpdateDetailClicked ? (
            <button
              onClick={HandleUpdateDetail}
              className="border px-8 py-2 bg-slate-800 text-white relative top-24 rounded-md hover:bg-slate-900 "
            >
              Update Detail
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
