"use client";
import { removeUser } from "@/redux/slices/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const userData = useSelector((data) => data.user.users);
  return (
    <div className="display-user">
      <h3>User List</h3>
      {userData.map((item) => (
        <div key={item.id} className="user-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser({id:item.id}))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
