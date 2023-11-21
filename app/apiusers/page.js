"use client";

import { fetchApiData } from "@/redux/slices/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ApiUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.usersApiData);
  console.log(data);
  useEffect(()=>{
    dispatch(fetchApiData())
  },[])
  return (
    <div>
      <h1>User List from Api</h1>
      {/* <button onClick={() => dispatch(fetchApiData())}>Click me</button> */}
      {data.map((item,i) => (
        <h4 key={i}>{item.name}</h4>
      ))}
    </div>
  );
};

export default ApiUsers;
