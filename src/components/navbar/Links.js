  import React from "react";
import { Link } from "react-router-dom";


export const Links = () => {
  const isAuthenticatedUser = localStorage.getItem("auth");

   const userData = JSON.parse(isAuthenticatedUser)

  
  return (
    <>
      <li>
        <Link to="/" className="hover:text-xl  ">
          Home
        </Link>
      </li>
      <li>
        <Link to="/property" className="hover:text-xl  ">
          Property
        </Link>
      </li>
      {!isAuthenticatedUser?"":
      <li>
        {userData.user.role === "admin"?<Link to="/sell" className="hover:text-xl  ">
          Sell
        </Link>:""}
      
        
      </li>
      }
        
          
      <li>
        <Link to="/process" className="hover:text-xl  ">
          Process
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-xl  ">
          About
        </Link>
      </li>
    </>
  );
};
