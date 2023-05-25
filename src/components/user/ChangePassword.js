import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { Helmet } from "react-helmet";
import { URL } from "../Url";


export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [post, setPosts] = useState([]);
  const navigate = useNavigate;

  const UpdatePassword = async (currentPassword, newPassword) => {
    await fetch(`${URL}updatePassword`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Cookie: document.cookie,
      },
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setCurrentPassword("");
        setNewPassword("");
        if (data.success === true) {
          alert("Hello");
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdatePassword(currentPassword, newPassword);
  };
  return (
    <div className=" h-full flex items-end ">
      <Helmet>
        <title>Aris - Change Password</title>
      </Helmet>
      <div className="mx-auto w-2/6 h-4/6">
        <h2 className="text-xl font-medium mb-8 -ml-4">Update Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block ">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 border border-transparent border-b-gray-400 rounded focus:outline-none focus:border-b-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block mb-1">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-transparent border-b-gray-400 rounded focus:outline-none focus:border-b-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-slate-800 rounded hover:bg-slate-900 focus:outline-none"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};
